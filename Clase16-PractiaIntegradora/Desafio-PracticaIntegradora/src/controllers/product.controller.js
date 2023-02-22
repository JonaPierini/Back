const products = require("../../products");
const {
  getProductsService,
  createProductService,
  updateProductService,
  createManyProductsService,
  deleteProductService,
} = require("../services/product.service");

const getProducts = async () => {
  let products = await getProductsService();
  return products.reverse();
};

const createProduct = async (product) => {
  try {
    if (!product.image.length) delete product.image;

    if (!product.title || !product.price) throw Error("Fields missing");

    let result = await createProductService(product);

    return result;
  } catch (error) {
    throw Error(error);
  }
};

const updateProduct = async (id, productUpdated) => {
  try {
    //Sino se especifica imagen eliminamos el campo para que no lo modifique con un string vacio
    if (!productUpdated.image) delete productUpdated.image;

    let result = await updateProductService(id, productUpdated);

    return result;
  } catch (error) {
    throw Error(error);
  }
};

const deleteProduct = async (id) => {
  try {
    let result = await deleteProductService(id);

    return result;
  } catch (error) {
    throw Error(error);
  }
};

const createManyProducts = async () => {
  try {
    let result = await createManyProductsService(products);
    return result;
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  createManyProducts,
  deleteProduct,
};
