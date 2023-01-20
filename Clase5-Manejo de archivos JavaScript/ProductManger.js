const fs = require('fs')
class ProductManager {
  
  constructor(file) {
    this.path = file
    this.products = [];
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
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
    await fs.writeFile(this.path, JSON.stringify(newProduct), (err) => {
      if(err) {
        console.log(err)
      } else{
        this.products.push(newProduct)
      }
    })
  }

  async getProducts() {
     await fs.readFile(this.path, 'utf-8', newProduct, (err, data) =>{
      if(err) {
        console.log(err)
      } else {
        return JSON.parse(data)
      }
     })
  }

  async getProductById(id) {
    await fs.readFile(this.path, 'utf8', (err) => {
      if (err) {
        console.log(err);
      }
      else{
         let productId = this.products.find((prod)=> prod.id === id) 
         return JSON.parse(productId) 
      }
    });
  }

  async updateProduct(id) {
      if(this.products.find((prod)=> prod.id !== id)) {
        return this.products
      }
  }

  async deleteProduct (id) {
     await fs.readFile(this.path, 'utf-8', (err) => {
      if(err){
        console.log(err)
      } else{
        return this.products.find((prod => prod.id !== id))
      }
     })
  }
}


module.exports = ProductManager