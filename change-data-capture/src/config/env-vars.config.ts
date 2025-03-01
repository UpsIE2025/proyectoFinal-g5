import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    NODE_ENV: process.env.NODE_ENV as 'development',
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.PORT,
    KAFKA_HOST: process.env.KAFKA_HOST,
    KAFKA_PORT: process.env.KAFKA_PORT,
    KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID,
  };
});