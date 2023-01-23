import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
var firebaseui = require("firebaseui");

export const ui = new firebaseui.auth.AuthUI(getAuth());
ui.start("#firebaseui-auth-container", {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    },
  ],
});

// export const uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function () {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById("loader").style.display = "none";
//     },
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   // signInFlow: "popup",
//   // signInSuccessUrl: "<url-to-redirect-to-on-success>",
//   // signInOptions: [
//   //   // Leave the lines as is for the providers you want to offer your users.
//   //   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   //   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   //   firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//   //   firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   //   firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   //   firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//   // ],
//   // // Terms of service url.
//   // tosUrl: "<your-tos-url>",
//   // // Privacy policy url.
//   // privacyPolicyUrl: "<your-privacy-policy-url>",
// };
