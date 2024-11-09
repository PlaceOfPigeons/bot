const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

// Используем секрет Firebase API ключа через переменную окружения
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,  // Получаем ключ из переменной окружения
  authDomain: "placeofpigeons.firebaseapp.com",
  databaseURL: "https://placeofpigeons-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "placeofpigeons",
  storageBucket: "placeofpigeons.appspot.com",
  messagingSenderId: "67354529384",
  appId: "1:67354529384:web:716cf99397eb9002c435dd",
  measurementId: "G-P70KRENL94"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log("Firebase Initialized");
