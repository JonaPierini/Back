class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find((prod) => prod.code === code)) return;
    if (!title || !description || !thumbnail ||!code ||isNaN(price) || isNaN(stock)) return;
    let newProduct = {
      title,
      description,
      thumbnail,
      code,
      price,
      stock,
      id: this.products.length + 1,
    };
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    if (this.products.find((prod) => prod.id === id)) {
      console.log("Producto Encontrado");
    } else {
      console.log("Not Found");
    }
  }
}

let nuevo1 = new ProductManager();
nuevo1.addProduct("producto1", "rico", 100.5, 100, 100, 100);
nuevo1.getProducts()


