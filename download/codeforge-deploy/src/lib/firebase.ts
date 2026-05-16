import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnN7cgbnFYm6OGpMngNZqPU73XfARW6YI",
  authDomain: "codeforge-blog-67047.firebaseapp.com",
  projectId: "codeforge-blog-67047",
  storageBucket: "codeforge-blog-67047.firebasestorage.app",
  messagingSenderId: "339020988394",
  appId: "1:339020988394:web:686996433722a729043c93",
  measurementId: "G-JWD4RQVSMQ",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const db = getFirestore(app)

export { db }
