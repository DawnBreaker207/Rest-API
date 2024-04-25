const dev = {
  app: {
    port: process.env.DEV_PORT || 8888,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'ShopDev',
  },
};
const pro = {
  app: {
    port: process.env.PRO_PORT || 8888,
  },
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || 'ShopDev',
  },
};


const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
console.log(config[env], env);
export default config[env];
