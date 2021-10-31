// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  VERSION: '0.1',
  UUID: null,
  DEVICE: null,
  LOC: {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: null,
    longitude: null,
    speed: null,
  },
  firebaseConfig : {
    apiKey: 'AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo',
    authDomain: 'synans-social-project.firebaseapp.com',
    projectId: 'synans-social-project',
    storageBucket: 'synans-social-project.appspot.com',
    messagingSenderId: '335450841714',
    appId: '1:335450841714:web:cd3d4bfb17d1a63723d8eb',
    measurementId: 'G-5TRMMTFMD2'
  },
  firebaseApiKey:'AIzaSyDUfHKUO9Vc6BCi4TDDq3kyMKe0aJJWzHo'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
