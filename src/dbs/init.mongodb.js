import mongoose from 'mongoose';
import config from '../configs/config.mongodb.js';
const {
  db: { host, name, port },
} = config;

const URI = `mongodb://${host}:${port}/${name}`;
class Database {
  constructor() {
    this.connect();
  }
  // connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      // Logging action when query database
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect(
        URI
        //   , {
        //   maxPoolSize: 50,
        // }
      )
      .then((_) => console.log(`Connect MongoDB success`))
      .catch((err) => console.log(`Error Connect! ${err}`));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();

export default instanceMongoDB;
