## Introduction
This is an example repo of how to integrate a React app created using [Create React App](https://github.com/facebook/create-react-app) with [Electron](https://electronjs.org/) and includes an example of how to access Electron's IPC modules through the client-side React UI.

Credit goes to [Bertrand Boustany](https://github.com/poksme) for his great instructions [here](https://github.com/poksme/create-react-app/blob/0428b14908759d65a7589e9f98db4dffd5e40471/packages/react-scripts/template/README.md#integrating-with-electron) on how to easily integrate Electron with Create React App.
.

However, in his instructions, he states this:
"If your app needs to access Electron specific features such as IPC you will need to eject the react-scripts and set `electron-renderer` as your webpack target."

Credit goes to [Brandon Bayer](https://github.com/flybayer) for his [comment ](https://github.com/facebook/create-react-app/pull/1718#issuecomment-298134306) which explains how it is possible to access IPC modules without having to run `eject` on your `create-react-app` app .

Also, credit goes to [Hamza Surti](https://medium.com/@hamzasurti) for his [Medium article](https://medium.com/@hamzasurti/in-progress-6959b733a55a) explaining what Electron's IPC modules are and an example of how to use them.

Last but not least, a great thanks to [Christian Sepulveda](https://medium.freecodecamp.org/@csepulv) for originally documenting the idea in this [freeCodeCamp article](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c) by .
