import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCDlKcoKRngDN3SU4-eU7TOt02cbR65vdU",
    authDomain: "nuxt-crud-eed64.firebaseapp.com",
    projectId: "nuxt-crud-eed64",
    storageBucket: "nuxt-crud-eed64.appspot.com",
    messagingSenderId: "694311351307",
    appId: "1:694311351307:web:33a1d6e5741a08ff30c30e",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  return {
    provide: {
      auth,
    },
  };
});
