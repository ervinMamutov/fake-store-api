import productsData from '../data/productsData.js';

class Product {
  constructor(product) {
    this.product = product;
  }

  static getProducts = () => {
    return productsData;
  };

  addProduct = () => {
    productsData.push(this);
  };
}

export default Product;
