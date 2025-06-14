import express from 'express';
import { connectDB } from './database/databaseConnection';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('¡Backend Node.js con TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  connectDB()
});