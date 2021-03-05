// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // firebase: {
  //   apiKey: "AIzaSyBJEuXK7WkrAjay4U6D_CzKySrjNHyQGQ0",
  //   authDomain: "cardserver-a776c.firebaseapp.com",
  //   databaseURL: "https://cardserver-a776c.firebaseio.com",
  //   projectId: "cardserver-a776c",
  //   storageBucket: "cardserver-a776c.appspot.com",
  //   messagingSenderId: "68955262053",
  //   appId: "1:68955262053:web:fdbc594d292db56fb9ca8c",
  //   measurementId: "G-0BNNSMWTYX"
  // }
  firebase :{
    apiKey: "AIzaSyBURzC5Y4unNIKPS9LWhdpyal1XnJLDVzk",
    authDomain: "card-eaf72.firebaseapp.com",
    databaseURL: "https://card-eaf72-default-rtdb.firebaseio.com",
    projectId: "card-eaf72",
    storageBucket: "card-eaf72.appspot.com",
    messagingSenderId: "651995818023",
    appId: "1:651995818023:web:5fef38672c3a7390488602",
    measurementId: "G-N06T76PTCF"
  }
  // ,
  // authentication: {
  //   google: {
  //     webClientId: '68955262053-ekcrnsn5e3upgeflenp5kqsbi77d97sm.apps.googleusercontent.com',
  //     offline: true
  //   }
  // }
};

export const BASE_SERVER = 'https://cardserver93.herokuapp.com';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
