import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAM94u1n141Zj4G_4aJbkcqydVkiJj8wqM",
  authDomain: "netflix-db-befb6.firebaseapp.com",
  projectId: "netflix-db-befb6",
  storageBucket: "netflix-db-befb6.appspot.com",
  messagingSenderId: "416181609402",
  appId: "1:416181609402:web:77ee0efb262e082f2d3383",
  measurementId: "G-J22LC0H7Y1",
};

const app = initializeApp(firebaseConfig);
export const firbaseauth = getAuth(app);
