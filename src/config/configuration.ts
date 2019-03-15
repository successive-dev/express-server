import { config } from 'dotenv';
import IConfig from './IConfig';
config();

const envVars: NodeJS.ProcessEnv = process.env;

const configuration: IConfig = Object.freeze({
    mongo_url: envVars.MONGO_URL,
    node_env: envVars.NODE_ENV,
    password: envVars.PASSWORD,
    port: envVars.PORT,
    secret: envVars.SECRET,
});

export default configuration;
