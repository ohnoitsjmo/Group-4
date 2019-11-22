import { Router } from 'express';
import { getRepository, getManager } from 'typeorm';
import isAuthenticated from '../middleware/isAuthenticated';
import Announcement from '../entities/announcement';


const router = Router();
router.route('/announcement')
  .get((req, res) => {
    getRepository(Announcement).find().then(foundAnnouncements => {
      res.send(foundAnnouncements);
    })
  })
  .all(isAuthenticated)
  .post((req, res) => {
    const { text } = req.body;
    const manager = getManager();
    const announcement = manager.create(Announcement, { text});
    manager.save(announcement).then((savedAnnouncement) => {
      res.send(savedAnnouncement);
    });
  });

export default router;
