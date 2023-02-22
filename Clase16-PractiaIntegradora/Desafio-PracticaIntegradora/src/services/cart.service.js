const CartManager = require("../dao/mongoDb/cart.dao");
const cartSchema = require("../dao/models/cart.model");
const { getProductsService } = require("./product.service");

const cartDAO = new CartManager("carts", cartSchema);

const getCartService = async (id) => {
  try {
    const cart = await cartDAO.getCart(id);
    return cart;
  } catch (error) {
    throw Error(error);
  }
};
const createCartService = async () => {
  try {
    const newCart = await cartDAO.createCart();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

const addProductToCartService = async (cartId, productId) => {
  try {
    const result = await cartDAO.addProduct(cartId, productId);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

const deleteProductInCartService = async (cartId, productId) => {
  try {
    const result = await cartDAO.deleteProduct(cartId, productId);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  createCartService,
  addProductToCartService,
  getCartService,
  deleteProductInCartService,
};
