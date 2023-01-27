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
    //se agregan los productos en el array
    this.products.push(newProduct)

    //se escribe el json con los datos del array
    await fs.writeFile(this.path, JSON.stringify(newProduct), (err) => {
      if(err) {
        console.log(err)
      } else{
        console.log('Producto cargado')
      }
    })
  }

  async getProducts() {
      try {
        const file = await fs.promises.readFile(this.path, 'utf-8')
        return JSON.parse(file)
      } catch (error) {
        console.log(error)
      }
  }

  async getProductById(id) {
    try {
      const file = await fs.promises.readFile(this.path, 'utf-8')
      const productsId = JSON.parse(file).find((prod) => prod.id == id)
      return productsId
    } catch (error) {
        console.log(error)
    }
  }

  async updateProduct(id){
    try {
      const file = await fs.promises.readFile(this.path, 'utf-8')
      let jsonParse = JSON.parse(file)
      let newProd = ''
      jsonParse.find((elem) => elem.id == id).title = newProd,
      await fs.promises.writeFile(file, JSON.stringify(jsonParse))
    } catch (error) {
      console.log(error)
    }
  }

  async deleteProduct (id) {
    const file = await fs.promises.readFile(this.path, 'utf-8')
    const delet = JSON.parse(file).filter((prod) => prod.id != id)
    await fs.promises.writeFile(file, JSON.stringify(delet))
  }
}


module.exports = ProductManager