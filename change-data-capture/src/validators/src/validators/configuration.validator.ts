import * as Joi from 'joi';

export const configurationValidator = Joi.object({
  NODE_ENV: Joi.string().required(),
  DB_HOST: Joi.string(),
  DB_NAME: Joi.string(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  PORT: Joi.number().required(),
  KAFKA_HOST: Joi.string().required(),
  KAFKA_PORT: Joi.number().required(),
});