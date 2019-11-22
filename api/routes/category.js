import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Category from '../entities/category';


const router = Router();
router.route('/category')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Category).find( { relations: ["products"] } ).then(foundCategories => {
      res.send(foundCategories);
    })
  })
  
  .post((req, res) => {
    const { name } = req.body;
    const manager = getManager();
    const category = manager.create(Category, { name });
    manager.save(category).then((savedCategory) => {
      res.send(savedCategory);
    });
  });

export default router;