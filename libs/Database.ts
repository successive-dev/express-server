import * as mongoose from 'mongoose';
export default class Database {

    public async open(url: string) {
        try {
            const conn = await mongoose.connect(url, { useNewUrlParser: true });
            return conn;
        } catch (ex) {
            throw new Error(ex);
        }
    }

    public disconnect() {
        mongoose.disconnect();
    }
}
