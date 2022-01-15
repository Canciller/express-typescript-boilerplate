import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
  env: process.env.NODE_ENV ? process.env.NODE_ENV : 'development', 
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production',
  test: process.env.NODE_ENV === 'test',
};

export default config;