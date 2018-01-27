// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDTzC9nKx65kesixMck_w0j01zx6-xQRsA",
    authDomain: "my-first-ng5.firebaseapp.com",
    databaseURL: "https://my-first-ng5.firebaseio.com",
    projectId: "my-first-ng5",
    storageBucket: "my-first-ng5.appspot.com",
    messagingSenderId: "430658704018"
  }
};
