class ProductManager {
  constructor() {
    this.products = []
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if(this.products.find((prod) => prod.code === code)) return;
    if(!title || !description || !thumbnail || !code || isNaN(price) || isNaN(stock) ) return
    let id = 0
     this.products.push(    
         {
            title, 
            description,  
            thumbnail, 
            code,
            price,
            stock,
         }
     )
     id = id +1
  }

  getProducts() {
    return this.products
  }

  getProductById (id) {
    if(this.products.find((prod) => prod.id === id)) {
        console.log('Producto Encontrado')
    } else{
        console.log('Not Found')
    }
    
  }

}

let nuevo1 = new ProductManager()
nuevo1.addProduct('producto1', 'rico', 100.50, 100, 100, 100)
nuevo1.getProducts()
console.log(nuevo1)



