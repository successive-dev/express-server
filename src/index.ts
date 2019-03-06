// import {config} from './config/IConfig';
import Server from './Server';
import Database from '../libs/Database';

require('dotenv').config()
let config = {
    port:process.env.PORT,
    node_env:process.env.NODE_ENV
}
config = Object.freeze(config);

const db = new Database();
db.open(process.env.MONGO_URL);

const s = new Server(config);
s.setupRoutes();
s.run();
