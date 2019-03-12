import * as mongoose from "mongoose";
export default class Database {

    public open(url: string) {
        mongoose.connect(url, {useNewUrlParser: true})
        .catch((err) => {throw new Error("Can't connect to DB" + err); });
    }

    public disconnect() {
        mongoose.disconnect();
    }
}
