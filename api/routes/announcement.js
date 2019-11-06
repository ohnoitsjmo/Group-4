import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Announcement from '../entities/announcement';


const router = Router();
router.route('/announcement')
  .all(isAuthenticated)
  .get((req, res) => {
    getRepository(Announcement).find().then(foundAnnouncements => {
      res.send(foundAnnouncements);
    })
  })
  /*
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
/*const router = Router();
router.route('/announcements')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.announcement);
  })
  .post((req, res) => {
    const { text, time } = req.body;
    const manager = getManager();
    const announcement = manager.create(Announcement, { text, time });
    manager.save(announcement).then((savedAnnoucement) => {
      res.send(savedAnnoucement);
    });
  });
/*const router = Router();
router.route('/announcment')
  .all(isAuthenticated)
  .get((req, res) => {
    res.send(req.announcement);
  })
  .post((req, res) => {
    const { text } = req.body;
    const manager = getManager();
    const annoucment = manager.create(Announcement, { text});
    announcement.time = req.time;
    manager.save(annoucment).then((savedAnnoucement) => {
      res.send(savedAnnoucement);
    });
  });
  router.route('/annoucement/:id')
  .get((req, res, next) => {
    getRepository(Announcement).findOneOrFail(
      req.params.id,
    ).then((_foundAnnouncement) => {
      req.category = _foundAnnouncement;
      res.send(_foundAnnouncement);
    }, () => {
      res.send(404);
    });
  })
  .all(isAuthenticated)
  .put((req, res) => {
    const foundAnnoucement = req.Annoucnement;
    const { text} = req.body;
    foundAnnoucement.text = text;
    getManager().save(foundAnnoucement).then((updatedAnnoucement) => {
      res.send(updatedAnnoucement);
    });
  })
  .get((req, res) => {
    res.send(req.annoucment);
  })
  .delete((req, res) => {
    getManager().delete(Announcement, req.annoucment.id).then(() => {
      res.send(200);
    });
  });*/

export default router;
