const fs = require("fs");
const { join } = require("path");

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

    await fs.writeFile("data.txt", JSON.stringify(newProduct), (error) => {
      if (error) {
        console.log(error);
      } else {
          this.products.push(newProduct)
      }
    });
  }

  async getProducts () {
    await fs.readFile("data.txt", 'utf-8', (err, data) => {
        if(err) {
            console.log(err)
        }
        else{
            console.log(JSON.parse(data))
            return JSON.parse(data)
        }
    })
  }
}


const prueba = new ProductManager();
prueba.addProduct("producto1", "rico", 4, "3", 300, 2);
prueba.getProducts()

