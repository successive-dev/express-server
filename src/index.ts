import * as dotenv from "dotenv";
import Server from "./Server";
dotenv.config();

const conf = Object.freeze({
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
});

const s = new Server(conf);
s.bootstarp();
