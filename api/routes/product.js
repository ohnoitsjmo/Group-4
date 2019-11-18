import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Product from '../entities/product';

const router = Router();
router.route('/product')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Product).find().then(foundProducts => {
      res.send(foundProducts);
    })
  })
  .post((req, res) => {
    const { name, image, stock, description, price, deliveryOption, saleStatus} = req.body;
    const manager = getManager();
    const product = manager.create(Product, { name, image,  stock, description, price, deliveryOption, saleStatus});
    manager.save(product).then((savedProduct) => {
      res.send(savedProduct);
    });
  });

  export default router;