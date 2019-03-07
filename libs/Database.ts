import * as mongoose from "mongoose";
import { User } from "../src/repositories/user/UserModel";
import seedUser from "./seedData";

export default class Database {

    public open(url: string) {
        mongoose.connect(url, {useNewUrlParser: true})
// tslint:disable-next-line: no-console
        .then(() => console.log("Connected to DB..."))
// tslint:disable-next-line: no-console
        .catch((err) => console.log(err.message));
        seedUser(User);
    }

    public disconnect() {
        mongoose.disconnect();
    }
}
