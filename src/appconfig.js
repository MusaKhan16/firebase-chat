import firebaseConfig from './firebase.json'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const app = initializeApp(firebaseConfig);
const DB = getFirestore()
const appAuth = getAuth()

export { appAuth, DB }
export default app