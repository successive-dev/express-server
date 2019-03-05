// import {config} from './config/IConfig';
import {Server} from './Server';
require('dotenv').config()
let config = {
    port:process.env.PORT,
    node_env:process.env.NODE_ENV
}

config = Object.freeze(config);

const s = new Server(config);
s.setupRoutes();
s.run();
