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
        confession: req.body.confession,
        forgivenCount: 0,
        unforgivenCount: 0
    });

    return res.send(confession);
});

router.put('/:confessionId', async (req, res) => {
    
    // For now I only allow updates to forgiven & unforgiven counts
    let updates;
    if (req.body.newForgivenCount) {
        updates = { forgivenCount: req.body.newForgivenCount }
    }
    if (req.body.newUnforgivenCount) {
        updates = { unforgivenCount: req.body.newUnforgivenCount }
    }

    const updatedConfession = await Confession.findByIdAndUpdate(
        req.params.confessionId,
        updates,
        {
            new: true   // return the updated document
        });

    return res.send(updatedConfession);
});

export default router;
