import { Ollama } from "ollama";
import process from "node:process";

const ollama = new Ollama({ host: "http://127.0.0.1:11434" });

const MODELS = [
  "granite4:350m-h",
  "granite4:1b",
  "granite4:1b-h",
  "granite4:micro",
  "granite4:micro-h",
  "granite4:small-h",
  "granite4:tiny-h",
//   "qwen3:latest",
//   "mistral:latest",
];

async function callOllama(model: string, docs: string[], prompt: string) {
  const documents = await Promise.all(
    docs.map(async (docPath) => ({
      role: `document ${docPath.split("/").pop()}`,
      content: await Deno.readTextFile(docPath),
    })),
  );

  const startTime = performance.now();

  const response = await ollama.chat({
    model: model,
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant. Answer accurately and concisely. If you do not know the answer, simply say you do not know.",
      },
      ...documents,
      {
        role: "user",
        content:
          prompt,
      },
    ],
    stream: true,
  });

  let inThinking = false
  let content = ''
  let thinking = ''

  process.stdout.write(`## Model: ${model}\n\n`);
  for await (const chunk of response) {
    content += chunk.message.content;
    process.stdout.write(chunk.message.content);
    if (chunk.done) {
      process.stdout.write(
        `\n\nprompt(tokens): ${chunk.prompt_eval_count} model loading(sec): ${(chunk.load_duration/10e9).toFixed(2)} prompt_eval_time(sec): ${(chunk.prompt_eval_duration/10e9).toFixed(2)} response(tokens): ${chunk.eval_count} token/sec: ${
          Math.round(chunk.eval_count / chunk.eval_duration * 10e9)
        } total_duration(sec): ${(chunk.total_duration/10e9).toFixed(2)} total(sec): ${((performance.now()-startTime)/10e3).toFixed(2)}\n\n`,
      );

      return {
        ...chunk,
        message: {
            ...chunk.message,
            content,
        }
      }
    }
  }
}

async function main() {
  const results = [];

  for (const model of MODELS) {
    results.push(
      await callOllama(model, [
        "./data/README.md",
      ], "What is gitmocut?"),
    );
    //console.log(results[0])
  }
}
main();
