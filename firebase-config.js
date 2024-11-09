const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",  // Эта строка будет заменена через GitHub Action
  authDomain: "placeofpigeons.firebaseapp.com",
  databaseURL: "https://placeofpigeons-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "placeofpigeons",
  storageBucket: "placeofpigeons.appspot.com",
  messagingSenderId: "67354529384",
  appId: "1:67354529384:web:716cf99397eb9002c435dd",
  measurementId: "G-P70KRENL94"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
