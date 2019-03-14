import * as dotenv from 'dotenv';
import Server from './Server';
dotenv.config();

const conf = Object.freeze({
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
});

const server = new Server(conf);

server.bootstarp();
