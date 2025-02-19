// server.js
const express = require('express');
const db = require('./database');
const app = express();

app.use(express.json());

// Ruta para añadir un cliente
app.post('/api/customers', (req, res) => {
  const { name, phone, room_number } = req.body;
  const query = `INSERT INTO customers (name, phone, room_number) VALUES (?, ?, ?)`;
  db.run(query, [name, phone, room_number], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ id: this.lastID });
    }
  });
});

// Ruta para listar clientes
app.get('/api/customers', (req, res) => {
  db.all('SELECT * FROM customers', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
