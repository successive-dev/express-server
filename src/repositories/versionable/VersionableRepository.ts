import { Types } from 'mongoose';

export default class VersionableRepository {
  private model;

  constructor(userModel) {
    this.model = userModel;
  }

  public async create(data) {
    try {
      const originalId = this.genObjectId();
      const id = originalId;
      Object.assign(data, { _id: id, originalId });
      return await this.model.create(data);
    } catch (ex) {
      throw new Error('Cant create document');
    }
  }

  public async readOne(originalId) {
    try {
      return await this.model.findOne({
        deletedAt: { $exists: false },
        originalId,
      });
    } catch (ex) {
      throw new Error('No document found');
    }
  }

  public async read() {
    try {
      return await this.model.find({ deletedAt: { $exists: false } });
    } catch (ex) {
      throw new Error('No document found');
    }
  }

  public genObjectId() {
    return Types.ObjectId();
  }

  public async updateDeletedAt(originalId) {
    try {
      return await this.model.updateOne(
        { originalId, deletedAt: { $exists: false } },
        { $set: { deletedAt: new Date() } },
      );
    } catch (err) {
      throw new Error('Cant delete the document');
    }
  }

  public async update(originalId, dataToUpdate) {
    try {
      let doc = await this.readOne(originalId);
      doc = doc.toObject();
      doc = Object.assign(doc, dataToUpdate, {
        _id: this.genObjectId(),
        updatedAt: new Date(),
      });

      await this.updateDeletedAt(originalId);
      return await this.model.create(doc);
    } catch (err) {
      throw new Error('Unable to properly update document');
    }
  }

  public async delete(id) {
    return this.updateDeletedAt(id);
  }

  public async findByQuery(data) {
    try {
      const { limit, skip } = data;
      delete data.limit;
      delete data.skip;
      return await this.model.find(data, undefined, { limit, skip });
    } catch (err) {
      throw new Error('Unable to find document by query');
    }
  }
}
