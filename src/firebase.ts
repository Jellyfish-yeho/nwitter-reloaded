import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2_yI91_gZhxHlTSFu4yB_6dLI6OlrEEs",
    authDomain: "nwitter-reloaded-a5635.firebaseapp.com",
    projectId: "nwitter-reloaded-a5635",
    storageBucket: "nwitter-reloaded-a5635.appspot.com",
    messagingSenderId: "404577018672",
    appId: "1:404577018672:web:50febefbf268c5b52b1ef5",
};
//config option으로 app을 생성
const app = initializeApp(firebaseConfig);
//app의 인증 서비스를 사용
export const auth = getAuth(app);
