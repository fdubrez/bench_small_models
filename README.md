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

## Gaming rig 

```shell
$ neofetch
             /////////////                fdubrez@pop-os 
         /////////////////////            -------------- 
      ///////*767////////////////         OS: Pop!_OS 22.04 LTS x86_64 
    //////7676767676*//////////////       Host: MS-7D75 1.0 
   /////76767//7676767//////////////      Kernel: 6.17.4-76061704-generic 
  /////767676///*76767///////////////     Uptime: 8 mins 
 ///////767676///76767.///7676*///////    Packages: 1904 (dpkg) 
/////////767676//76767///767676////////   Shell: bash 5.1.16 
//////////76767676767////76767/////////   Resolution: 2560x1440 
///////////76767676//////7676//////////   DE: GNOME 42.9 
////////////,7676,///////767///////////   WM: Mutter 
/////////////*7676///////76////////////   WM Theme: Pop 
///////////////7676////////////////////   Theme: Pop-dark [GTK2/3] 
 ///////////////7676///767////////////    Icons: Pop [GTK2/3] 
  //////////////////////'////////////     Terminal: gnome-terminal 
   //////.7676767676767676767,//////      CPU: AMD Ryzen 5 9600X (12) @ 5.486GHz 
    /////767676767676767676767/////       GPU: NVIDIA 01:00.0 NVIDIA Corporation Device 2702 
      ///////////////////////////         GPU: AMD ATI 10:00.0 Device 13c0 
         /////////////////////            Memory: 4830MiB / 31185MiB

$ deno run -A bench.ts 
## Model: granite4:350m-h

Gitmocut is a Tauri + Vanilla JS app for quickly adding unicode gitmojis to your clipboard.

prompt(tokens): 340 model loading(sec): 1.66 prompt_eval_time(sec): 0.00 response(tokens): 25 token/sec: 3699 total_duration(sec): 1.67 total(sec): 1.67

## Model: granite4:1b

gitmocut is a Tauri + Vanilla JS app to quickly add a unicode gitmoji to your clipboard.

prompt(tokens): 340 model loading(sec): 1.05 prompt_eval_time(sec): 0.00 response(tokens): 26 token/sec: 1519 total_duration(sec): 1.07 total(sec): 1.07

## Model: granite4:1b-h

gitmocut is a Tauri + Vanilla JS app designed for quickly adding unicode gitmoji to your clipboard. It utilizes Gitmoji CLI (https://github.com/carloscuesta/gitmoji-cli) to fetch and format the gitmoji emojis.

prompt(tokens): 340 model loading(sec): 0.20 prompt_eval_time(sec): 0.00 response(tokens): 56 token/sec: 1839 total_duration(sec): 0.23 total(sec): 0.23

## Model: granite4:micro

Gitmocut is a Tauri + Vanilla JS app designed to quickly add a unicode gitmoji to your clipboard using a predefined shortcut. The description suggests it combines the functionalities of gitmoji and a shortcut, hence the name "gitmocut".

prompt(tokens): 340 model loading(sec): 1.26 prompt_eval_time(sec): 0.00 response(tokens): 55 token/sec: 1910 total_duration(sec): 1.29 total(sec): 1.29

## Model: granite4:micro-h

Gitmocut is a Tauri + Vanilla JS app designed for quickly adding a unicode gitmoji to your clipboard. It was created using resources from Carlos Cuesta's gitmoji repository.

prompt(tokens): 340 model loading(sec): 0.26 prompt_eval_time(sec): 0.00 response(tokens): 42 token/sec: 1630 total_duration(sec): 0.29 total(sec): 0.29

## Model: granite4:small-h

Gitmocut is a Tauri + Vanilla JS app designed to quickly add a unicode gitmoji to your clipboard. It can be started with the command `npm run tauri dev` and built using `npm run tauri build`. On Ubuntu, it creates an AppImage and a .deb file that can be installed using `dpkg -i /path/to/<app>.deb`. The gitmoji list was taken from Carlos Cuesta's gitmoji repository.

prompt(tokens): 340 model loading(sec): 2.07 prompt_eval_time(sec): 0.13 response(tokens): 101 token/sec: 207 total_duration(sec): 2.69 total(sec): 2.69

## Model: granite4:tiny-h

Gitmocut is a Tauri + Vanilla JS app designed to quickly add a unicode gitmoji to your clipboard. It simplifies the process of incorporating standardized emoji tags into commit messages, following best practices for Git commits. The name 'gitmocut' combines 'gitmoji', representing git and emojis together, with 'cut', signifying that the tool allows users to cut or copy a chosen gitmoji directly to their clipboard.

prompt(tokens): 340 model loading(sec): 0.46 prompt_eval_time(sec): 0.00 response(tokens): 93 token/sec: 1925 total_duration(sec): 0.52 total(sec): 0.52
``` 