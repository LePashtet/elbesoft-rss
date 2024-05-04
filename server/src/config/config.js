const dotenv = require('dotenv');
const Joi = require('joi');

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    LOG_LEVEL: Joi.string().valid('error', 'warn', 'info', 'debug').default('info'),
    GOOGLE_CLIENT_ID: Joi.string().required().description('Google Auth credentials'),
    GOOGLE_CLIENT_SECRET: Joi.string().required().description('Google Auth credentials'),
    GOOGLE_CALLBACK_URL: Joi.string().required().description('Google Auth credentials'),
  })
  .unknown();

function createConfig(configPath) {
  dotenv.config({ path: configPath });

  const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env);

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  return {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongo: {
      url: envVars.MONGODB_URL,
    },
    logLevel: envVars.LOG_LEVEL,
    googleClientId: envVars.GOOGLE_CLIENT_ID,
    googleClientSecret: envVars.GOOGLE_CLIENT_SECRET,
    googleCallbackUrl: envVars.GOOGLE_CALLBACK_URL,
  };
}

module.exports = {
  createConfig,
};
