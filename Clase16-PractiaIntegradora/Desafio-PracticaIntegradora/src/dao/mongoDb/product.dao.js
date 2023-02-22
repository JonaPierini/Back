const mongoose = require("./db");

class ProductMaganer {
  constructor(collection, schema) {
    this.productCollection = mongoose.model(collection, schema);
  }

  async getAllProducts() {
    try {
      let products = await this.productCollection.find().lean();
      return products;
    } catch (error) {
      throw Error(error);
    }
  }

  async createProduct(product) {
    try {
      let result = await this.productCollection.create(product);
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
  async updateProduct(id, product) {
    try {
      let result = await this.productCollection.updateOne({ _id: id }, product);
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
  async deleteProduct(id) {
    try {
      let result = await this.productCollection.deleteOne({ _id: id });
      return result;
    } catch (error) {
      throw Error(error);
    }
  }

  async createManyProducts(products) {
    try {
      let result = await this.productCollection.insertMany(products);
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = ProductMaganer;
