const fs = require('fs');

// Чтение конфигурации Firebase
const configFilePath = './firebase-config.js'; // Путь к файлу, где хранится конфигурация Firebase

// Чтение содержимого конфигурации
let firebaseConfig = fs.readFileSync(configFilePath, 'utf8');

// Получение ключа из переменных окружения
const apiKey = process.env.FIREBASE_API_KEY;  // Получаем ключ из переменной окружения

// Замена строки apiKey на значение из секретов
firebaseConfig = firebaseConfig.replace('YOUR_FIREBASE_API_KEY', apiKey);

// Запись обновленного файла конфигурации
fs.writeFileSync(configFilePath, firebaseConfig);

console.log('Firebase API key has been set');
