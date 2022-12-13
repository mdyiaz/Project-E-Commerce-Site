// step_4:___________________________________________________________firebase theke ei jinista eikhane 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey ,
  authDomain:process.env.REACT_APP_authDomain ,
  projectId:process.env.REACT_APP_projectId ,
  storageBucket:process.env.REACT_APP_storageBucket ,
  messagingSenderId:process.env.REACT_APP_messagingSenderId ,
  appId:process.env.REACT_APP_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// step_5:__________________________________________________________________________
export default app;

// step_6: firebase er eii secret details gula .env.local file e rakhbo taii .env.local file khulte hobe root e_______________________________