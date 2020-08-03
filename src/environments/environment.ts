// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDub_AcTgxoclFPRIcFdprYdrWACqDH7ZY",
    authDomain: "pruebaoauth-26e23.firebaseapp.com",
    databaseURL: "https://pruebaoauth-26e23.firebaseio.com",
    projectId: "pruebaoauth-26e23",
    storageBucket: "pruebaoauth-26e23.appspot.com",
    messagingSenderId: "890980743833",
    appId: "1:890980743833:web:366354b025292f5e4c5608",
  },
  v2cServiceConfig: {
    basicOAuth: "Y2xvdWRAdjJjLmNvbToxMjM0",
    basePath: "https://v2c.herokuapp.com",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
