<h1 align="center">Blocky Clicker</h1>

<p align="center">


  <br>
  <em>Blocky Clicker is a simple and lightweight clicking game.
    </em>
  <br>
</p>

<p align="center">
  <a href="https://github.com/intel1337/Blocky-Clicker/"><strong>Github Repo</strong></a>
  <br>
</p>

<p align="center">
  <a href="LICENSE">Terms of Service</a>
  ·
  <a href="https://github.com/intel1337/Blocky-Clicker/issues">Submit an Issue</a>
  ·
  <a href="https://github.com/intel1337/Blocky-Clicker/wiki">Documentation</a>
  <br>
  <br>
</p>

<p align="center">
  <a href="https://github.com/intel1337/Blocky-Clicker/releases">
    <img src="https://img.shields.io/badge/Get-BlockyClicker.-brown" alt="Blocky Clcker" />
    
  </a>&nbsp;
</p>

![icon](https://github.com/user-attachments/assets/e8cd6153-77d7-4aea-9910-6e098bf1982a)

# Credits :

### Lead Front Developper : 
[Este0207](https://github.com/este0207)

- Boss Fight Back & Front End
- Full FrontEnd, HTML CSS and Responsive Design
- Base Game's Code and Idea
- Meta and Game Balance Director
> [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=este0207&layout=donut)](https://github.com/anuraghazra/github-readme-stats)

  

### Lead Back Developper :
[intel1337](https://github.com/intel1337)

- Game Reactivity and Front End Visual Updates
- Web Design and Artistic Direction
- Full JS Back End & Game Engine
- Versioning and Commisions
> [![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=intel1337&layout=donut)](https://github.com/anuraghazra/github-readme-stats)





# Requirements
![GitHub language count](https://img.shields.io/github/languages/count/intel1337/Blocky-Clicker)
![GitHub top language](https://img.shields.io/github/languages/top/intel1337/Blocky-Clicker)
### Full Node Environement :
![img](https://img.shields.io/badge/Package:-npx-green)
![img](https://img.shields.io/badge/Runtime:-node-green)
![img](https://img.shields.io/badge/Version:-nvm-green)
![img](https://img.shields.io/badge/PackageManager:-npm-green)




## Packages and depedencies
![img](https://img.shields.io/badge/Framework:-Electron-blue)
![img](https://img.shields.io/badge/Electron:-Packager-blue)
![img](https://img.shields.io/badge/Electron:-Forge-blue)
![img](https://img.shields.io/badge/Electron:-Installer-blue)

## Start
Open a shell 

```git
git clone https://github.com/intel1337/Blocky-Clicker.git
```
```bash
cd Blocky-Clicker
```

```node
npm i
```

```node
npx electron .
```

# Stack

Dev Environement :
```bash
OS : Darwin OSX
Kernel : XNU
Version : MacOS Sequoia 15.3.1b
Engine : V8
Runtime : NodeJS
--
Browser : Safari Latest 18/02/2025
Engine : Nitro
--
Dev Server : php developpement server
Production Server : Apache2 / Nginx Server
Versioning : git && github
-- IDE
Visual Studio Code
-- Languages :
HTML5
CSS3
JS6
```
Machine :
```bash
Brand : Apple
Model : Macbook Air 2024
Chip / CPU : Apple Silicon M3
Arch : aarch64/arm64
Arch Struc : armV8
```
Dependecies :
```bash

nvm : 0.40.0,
node : v20.17.0,
npx : 10.8.2,
npm : 10.8.2
electron : v32.2.8,
electron-installer : 1.0.3
```
# Technologies :
Runtime :
- NodeJS
  
Framework :
- Electron
- Electron Packager
- Electron Installer
- Minecraft CSS Framework

Misc : 
- Gitdiagram
# Build your Own :
### Install Electron Build

```node
npm install electron --save-dev
npm install electron-builder --save-dev
```
### MacOS Build Cross
```node
npx electron-builder --mac --icon=images/icon.icns
```
### Linux Systems Build
```node
npx electron-builder --linux --icon=images/icon.webp
```
> If icon Doesn't work, try to convert icon.webp to icon.png then run this :
```node
npx electron-builder --linux --icon=images/icon.png
```
### Windows Build Cross
```node
npx electron-builder --win --icon=images/icon.ico
```

### Android Build
> We Use capacitor and not Cordova or Electron for Android
```bash
npm init @capacitor/app
npx cap add android
npx cap copy
npx cap build android --prod
```
> you can test the app first with Android Studio
```bash
npx cap open android
```

### IOS Build
> We Use capacitor and not Cordova or Electron for IOS
```bash
npm init @capacitor/app
npx cap add ios
npx cap copy
npx cap build ios --prod
```
> you can test the app first with Xcode On a Mac
```bash
npx cap open ios
```

## Why Them ?
- NodeJs is the perfect Javascript runtime to use for our heavy Client and App
- Since Electron or Cap isnt available on Deno We chose NodeJS
- Why Electron ? Electron is fast, Lightweight, Simple to use And perfect for our needs
- This application is local focused so electron / a heavy client is what we needed the most
- We can Add that a WebBrowser has it's limits, Event if Electron runs on an image of Chromium with V8
- It's way more close to the machine and optimized for High UI Updates and massive numbers
- Same thing for capacitor, Really easy to use for IOS and Android
- No need to use Swift or Xcode tools for Ios App and No Kotlin, or Dart for Android
- GitDiagram for A proffessional Overview of the Repository

## To Change or Add ?
- The infrastructure of the code is terrible, OOP would make us gain a lot of time
- Unfortunately it's a school Project, meaning that we had a deadline.
- A Beta Version of the Wanted Infrastructure is available in the Diagram Section of this README
- We will probably add features and balance the game in the future

  

# Thanks to & Sources :
- https://legend077.github.io/framework-docs/
- https://jsr.io/@denoelectron/newtron
- https://choosealicense.com/licenses/mit/#
- https://developer.mozilla.org/en-US/docs/Web/API/
- https://openai.com/index/dall-e-3/
- https://app.diagrams.net
- https://stackoverflow.com/questions
- https://www.electronjs.org
- https://nodejs.org/en
- https://git-scm.com
- https://capacitorjs.com


# Diagrams :

## GitDiagram :

![diagram-6](https://github.com/user-attachments/assets/ab39e96d-36be-4892-ab6e-1def8f788b95)

## Wanted Architecture (Beta 1.0.0)
```bash
├───core
│   └───model
└───public
    ├───images
    └───src
        ├───model
        │   ├───tools
        │   │   └───class
        │   └───worlds
        │       └───class
        ├───scope
        │   ├───constants
        │   └───global
        ├───service
        │   ├───cookies
        │   └───game
        └───view
            ├───components
            └───ui
                └───update
```
![diagram](https://github.com/user-attachments/assets/9ceb2534-cf0d-4707-850a-1c17200b6e31)


## Algorigrams
![Algorigrams](https://github.com/intel1337/Blocky-Clicker/wiki)









