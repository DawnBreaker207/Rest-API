import app from './src/app.js';

const PORT = 8888;

const server = app.listen(8888, () => {
  console.log(`Listen on ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`Exit Server Express`));
});
