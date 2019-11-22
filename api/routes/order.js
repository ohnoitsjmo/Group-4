import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Order from '../entities/order';
import Product from '../entities/product';

const router = Router();
router.route('/order')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Order).find( { relations: ["products"] }).then(foundOrders => {
      //for(let i = 0; i < foundOrders.length; i++){
      //  foundOrders[i].user = {
      //    "id": req.user.id,
      //    "email": req.user.email
      //  }
      //}
      res.send(foundOrders);
    })
  })
  .post((req, res) => {
    const { status, price, products } = req.body;
    const manager = getManager();
    const order = manager.create(Order, { status, price, products });
    order.user = { 
      "id": req.user.id,
      "email": req.user.email
    };
    manager.save(order).then((savedOrder) => {
      res.send(savedOrder);
    });
  });
router.route('/order/:id')
  .all(isAuthenticated)
  .all((req, res, next) => {
    getRepository(Order).findOneOrFail(
      { where: { userId: req.user.id, id: req.params.id } },
    ).then((_foundTodo) => {
      req.todo = _foundTodo;
      next();
    }, () => {
      res.send(404);
    });
  })
  .put((req, res) => {
    const foundTodo = req.todo;
    const { title, done } = req.body;
    foundTodo.title = title;
    foundTodo.done = done;
    getManager().save(foundTodo).then((updatedTodo) => {
      res.send(updatedTodo);
    });
  })
  .get((req, res) => {
    res.send(req.todo);
  })
  .delete((req, res) => {
    getManager().delete(Order, req.todo.id).then(() => {
      res.send(200);
    });
  });

export default router;