import { Types } from "mongoose";

export default class VersionableRepository {
    private model;

    constructor(usermodel) {
        this.model = usermodel;
    }

    public async create(data) {
        try {
            const originalId = this.genObjectId();
            // tslint:disable-next-line: variable-name
            const _id = originalId;
            Object.assign(data, {_id, originalId });
            return await this.model.create(data);
        } catch (ex) {
            throw new Error("No document found");
        }
    }

    public async read(oid) {
        try {
            return await this.model.find({originalId: oid, deletedAt: {$exists: false}});
        } catch (ex) {
            throw new Error("No document found");
        }

    }

    public genObjectId() {
        return Types.ObjectId();
    }

    public async updateDeletedAt(oid) {
        try {
            await this.model.updateOne({originalId: oid, deletedAt: {$exists: false}}, {$set: {deletedAt: new Date()}});
        } catch (ex) {
            throw new Error("Can't deleted the document");
        }
    }

    public async update(oid, newData) {
        this.updateDeletedAt(oid);
        let doc = await this.read(oid);
        doc._id = this.genObjectId();
        doc.updatedAt = new Date();
        doc.originalId = oid;
        doc = Object.assign({}, newData, doc);

        return await this.model.create(doc);
    }

    public async del(id) {
        return this.updateDeletedAt(id);
    }

}
