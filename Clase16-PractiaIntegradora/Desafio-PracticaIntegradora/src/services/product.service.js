const productSchema = require("../dao/models/product.model");
const ProductMaganer = require("../dao/mongoDb/product.dao");

const productDAO = new ProductMaganer("products", productSchema);

const getProductsService = async () => {
  try {
    let products = await productDAO.getAllProducts();
    return products;
  } catch (error) {
    throw Error(error);
  }
};

const createProductService = async (product) => {
  try {
    let response = await productDAO.createProduct(product);
    return response;
  } catch (error) {
    throw Error(error);
  }
};
const updateProductService = async (id, product) => {
  try {
    let response = await productDAO.updateProduct(id, product);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

const deleteProductService = async (id) => {
  try {
    let response = await productDAO.deleteProduct(id);

    return response;
  } catch (error) {
    throw Error(error);
  }
};

const createManyProductsService = async (products) => {
  try {
    let response = await productDAO.createManyProducts(products);
    return response;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getProductsService,
  createProductService,
  updateProductService,
  createManyProductsService,
  deleteProductService,
};
