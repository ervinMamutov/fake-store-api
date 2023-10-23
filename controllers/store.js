import Product from '../models/products.js';

const storeControllers = {
  home: (req, res) => {
    const products = Product.getProducts();
    res.status(200).render('home', {
      products: products,
      isLoggedIn: req.session.isLoggedIn,
      email: req.session.email
    });
  },
  addProductForm: (req, res) => {
    res.status(200).render('addProduct', {
      isLoggedIn: req.session.isLoggedIn,
      email: req.session.email
    });
  },
  addProduct: (req, res) => {
    const product = req.body;
    if (!product.name || !product.year || !product.prise || !product.img) {
      res.status(400).render('message', {
        title: 'Product not found',
        message: 'Please fill in all product form fields'
      });
    } else {
      const newProduct = new Product(product);
      newProduct.addProduct();
      res.status(302).redirect('/');
    }
  }
};

export default storeControllers;
