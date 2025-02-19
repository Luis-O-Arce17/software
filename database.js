// database.js
const sqlite3 = require('sqlite3').verbose();

// Conectar o crear la base de datos (hotel.db)
const db = new sqlite3.Database('./hotel.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
  }
});

// Crear tablas (ejemplo con Customers)
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    room_number INTEGER
  )`);
});

module.exports = db;
