const {
  createCartService,
  addProductToCartService,
  getCartService,
  deleteProductInCartService,
} = require("../services/cart.service");
const { getProductsService } = require("../services/product.service");

const getCart = async (id) => {
  try {
    const cart = await getCartService(id);

    const products = await getProductsService();
    const findProducts = [];

    cart.products.forEach((productId) => {
      const product = products.find(
        (product) => product._id.toString() === productId
      );

      //Compruebo si los productos ya no han sido eliminados
      if (product) {
        findProducts.push(product);
      }
    });

    //Agrego los objetos productos en el carrito
    const formatCart = { ...cart, products: findProducts };

    return formatCart;
  } catch (error) {
    throw Error(error);
  }
};

const createCart = async () => {
  try {
    const newCart = await createCartService();

    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

const addProductToCart = async (cartId, productId) => {
  try {
    const result = await addProductToCartService(cartId, productId);

    return result;
  } catch (error) {
    throw Error(error);
  }
};

const deleteProductInCart = async (cartId, productId) => {
  try {
    const result = await deleteProductInCartService(cartId, productId);

    return result;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { createCart, addProductToCart, getCart, deleteProductInCart };
