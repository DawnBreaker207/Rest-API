import app from './src/app.js';
import config from './src/configs/config.mongodb.js';
const {
  app: { port },
} = config;

const server = app.listen(8888, () => {
  console.log(`Listen on ${port}`);
});

// process.on('SIGINT', () => {
//   server.close(() =>
// //{
//     console.log(`Exit Server Express`)
//    // ;
//     // process.exit(0);
//   //}
// );
// });
