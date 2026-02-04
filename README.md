## Description

lab repository to test small language models locally

## Getting started

* install deno
* simply run `deno run -A bench.ts`

## Results

### local + ollama on Apple M4 pro (48 GB unified memory)

```shell
$ deno run -A bench.ts

## Model: granite4:350m-h

gitmocut is a Tauri + Vanilla JS app that quickly adds unicode gitmoji to your clipboard. It can also build and install the AppImage or .deb file.

prompt(tokens): 340 model loading(sec): 0.08 prompt_eval_time(sec): 0.01 response(tokens): 39 token/sec: 1689 total_duration(sec): 0.11 total(sec): 0.11

## Model: granite4:1b

Gitmocut stands for "gitmoji & shortcut". It's a Tauri + Vanilla JS app developed to quickly add a Unicode gitmoji to your clipboard.

prompt(tokens): 340 model loading(sec): 0.32 prompt_eval_time(sec): 0.16 response(tokens): 37 token/sec: 637 total_duration(sec): 0.54 total(sec): 0.54

## Model: granite4:1b-h

Gitmocut is a Tauri + Vanilla JS app designed to quickly add a Unicode gitmoji to your clipboard. It stands for "gitmoji & shortcut :p".

prompt(tokens): 340 model loading(sec): 0.15 prompt_eval_time(sec): 0.04 response(tokens): 39 token/sec: 709 total_duration(sec): 0.25 total(sec): 0.25

## Model: granite4:micro

Gitmocut stands for "gitmoji & shortcut". It's a Tauri + Vanilla JS app used to quickly add a unicode gitmoji to your clipboard.

prompt(tokens): 340 model loading(sec): 0.21 prompt_eval_time(sec): 0.06 response(tokens): 37 token/sec: 891 total_duration(sec): 0.32 total(sec): 0.32

## Model: granite4:micro-h

gitmocut is a Tauri + Vanilla JS app that allows users to quickly add a Unicode Gitmoji to their clipboard. It uses the list of Gitmojis from Carlos Cuesta's repository.

prompt(tokens): 340 model loading(sec): 0.13 prompt_eval_time(sec): 0.05 response(tokens): 44 token/sec: 586 total_duration(sec): 0.25 total(sec): 0.25

## Model: granite4:small-h

Gitmocut is a Tauri + Vanilla JS app designed to quickly add a unicode gitmoji to your clipboard. It was created using resources from Carlos Cuesta's gitmoji repository.

prompt(tokens): 340 model loading(sec): 0.90 prompt_eval_time(sec): 1.01 response(tokens): 42 token/sec: 254 total_duration(sec): 2.07 total(sec): 2.07

## Model: granite4:tiny-h

Gitmocut is a Tauri and Vanilla JS app designed for quickly adding a unicode gitmoji to your clipboard.

prompt(tokens): 340 model loading(sec): 0.22 prompt_eval_time(sec): 0.08 response(tokens): 27 token/sec: 707 total_duration(sec): 0.34 total(sec): 0.34
```