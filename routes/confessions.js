import { Router } from 'express';
import Confession from '../models/confession.model';

const router = Router();

// we only define the subpath here; the resource path confessions/ will be added as middleware in app entry
router.get('/', async (req, res) => {
    // get data from mongo   
    const confessions = await Confession.find({});

    return res.send(confessions);
});

router.post('/', async (req, res) => {
    // post data to mongo
    const confession = await Confession.create({
        title: req.body.title,
        confession: req.body.confession
    });

    return res.send(confession);
});

export default router;
