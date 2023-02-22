const mongoose = require("./db");

class CartManager {
  constructor(collection, schema) {
    this.cartCollection = mongoose.model(collection, schema);
  }

  async createCart() {
    try {
      const newCart = await this.cartCollection.create({});
      return newCart;
    } catch (error) {
      throw Error(error);
    }
  }

  async getCart(id) {
    try {
      let cart = await this.cartCollection.findOne({ _id: id });

      if (!cart) {
        cart = await this.cartCollection.create({ _id: id });
      }

      return cart;
    } catch (error) {
      throw Error(error);
    }
  }

  async addProduct(cardId, productId) {
    try {
      const result = await this.cartCollection.updateOne(
        { _id: cardId },
        { $push: { products: productId } }
      );
      return result;
    } catch (error) {
      throw Error(error);
    }
  }

  async deleteProduct(cardId, productId) {
    try {
      const result = await this.cartCollection.updateOne(
        { _id: cardId },
        { $pull: { products: productId } }
      );
      return result;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = CartManager;
