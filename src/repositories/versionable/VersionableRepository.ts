// import { Document, Model, model } from "mongoose";

export default class VersionableRepository {
    private model;

    constructor(usermodel) {
        this.model = usermodel;
    }

    public async create(data) {
        try {
            return await this.model.create(data);
        } catch (ex) {
            throw new Error("No document found");
        }
    }

    public async read(id) {
        try {
            return await this.model.findById(id);
        } catch (ex) {
            throw new Error("No document found");
        }

    }

    public async update(id, newData) {
        // get doc by id and update it
        try {
            return await this.model.findByIdAndUpdate(id, newData);
        } catch (ex) {
            throw new Error("No document found");
        }
    }

    public async del(id) {
        // remove doc by id
        try {
            return await this.model.findByIdAndRemove(id);
        } catch (ex) {
            throw new Error("No document found");
        }
    }

}
