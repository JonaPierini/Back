const fs = require("fs");

class ProductManager {
  constructor() {
    this.products = [];
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find((prod) => prod.code === code)) return;
    if(title === '' || description == '' || isNaN(price) || thumbnail == '' || isNaN(code) || isNaN(stock)) return
    let newProduct = {
      title,
      description,
      thumbnail,
      code,
      price,
      stock,
      id: this.products.length + 1,
    };

     fs.writeFile("data.txt", JSON.stringify(newProduct), (error) => {
      if (error) {
        console.log(error);
      } else {
          this.products.push(newProduct)
      }
    });
  }

  getProducts (limit) {
    let productos = fs.readFileSync("data.json", 'utf-8')
    JSON.parse(productos)
    if(limit) {
      return JSON.parse(productos).slice(0,Number(limit))
    } else{
      return productos
    }
    
  }
}




module.exports = ProductManager
