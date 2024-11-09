const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

// Получаем ключ из переменной окружения
const apiKey = process.env.FIREBASE_API_KEY;

if (!apiKey) {
  console.error('FIREBASE_API_KEY is not set');
  process.exit(1); // Прекратить выполнение, если API ключ не задан
}

// Конфигурация Firebase с использованием переменных окружения
const firebaseConfig = {
  apiKey: apiKey,  // Используем ключ из переменной окружения
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
