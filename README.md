## Introduction
This is an example repo of how to integrate a React app created using [Create React App](https://github.com/facebook/create-react-app) with [Electron](https://electronjs.org/) and includes an example of how to access Electron's IPC modules through the client-side React UI.

Credit goes to [Bertrand Boustany](https://github.com/poksme) for his great instructions [here](https://github.com/poksme/create-react-app/blob/0428b14908759d65a7589e9f98db4dffd5e40471/packages/react-scripts/template/README.md#integrating-with-electron) on how to easily integrate Electron with Create React App.
.

However, in his instructions, he states this:
"If your app needs to access Electron specific features such as IPC you will need to eject the react-scripts and set `electron-renderer` as your webpack target."

Credit goes to [Brandon Bayer](https://github.com/flybayer) for his [comment ](https://github.com/facebook/create-react-app/pull/1718#issuecomment-298134306) which explains how it is possible to access IPC modules without having to run `eject` on your `create-react-app` app .

Also, credit goes to [Hamza Surti](https://medium.com/@hamzasurti) for his [Medium article](https://medium.com/@hamzasurti/in-progress-6959b733a55a) explaining what Electron's IPC modules are and an example of how to use them.

Last but not least, a great thanks to [Christian Sepulveda](https://medium.freecodecamp.org/@csepulv) for originally documenting the idea in this [freeCodeCamp article](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c).

## Instructions

### Initial Setup
Initialize your project using create-react-app
```
npx create-react-app my-app
cd my-app
npm start
```

### Integrating with Electron
Install dependencies for Electron
```
yarn add electron electron-is-dev
yarn add --dev concurrently electron-packager wait-on
```

Create a `main.js` file in the root of your repo and copy/paste the contents from this repo's [main.js](blob/master/main.js).

In your package.json, add these two lines in the root object to this:
```
  "homepage": "./",
  "main": "main.js",
```
The `main` property tells the `electron` command line script which file to run when it launches

`create-react-app` (by default) builds an index.html that uses absolute paths. This will fail when loading it in Electron. Thankfully, there is a config option to change this: set a `homepage` property in package.json. ([source](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c))

In your package.json, change your `scripts` object to this:
```
  "scripts": {
    "start": "concurrently 'yarn react-start' 'wait-on http://localhost:3000/ && yarn electron-start'",
    "build": "yarn react-build && yarn electron-build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "react-start": "BROWSER=none react-scripts start",
    "electron-start": "electron .",
    "react-build": "react-scripts build",
    "electron-build": "electron-packager ./ --overwrite"
  }
```

Feel free to reference this repo's [package.json](blob/master/package.json) file if these instructions are unclear.

### Updating your React app to use Electron's IPC modules
If you wish to update your app to be able to access IPC modules, refer to this repo's [src/App.js](blob/master/src/App.js) for example code on how to do it.

The code you copied from this repo's [main.js](blob/master/main.js) already includes code that will interact with the code in React. Feel free to rip it out of your app if you don't need it.
```
const ipcMain = require('electron').ipcMain;

// Electron IPC example
ipcMain.on('user-data', function(event, arg) {
  console.log(arg);
  //do child process or other data manipulation and name it manData
  event.sender.send('manipulatedData', 'COOL info!');
});
```

### Building Your App
Your app is now ready to be built!

Run:
```
yarn build
```
and wait for the magic to happen. Refer to the console messages to see where the script put your newly built app.

Currently, the script is configured to build the application for your current OS, but you can add additional scripts to target different operating systems.  Learn more [here](https://github.com/electron-userland/electron-packager).
