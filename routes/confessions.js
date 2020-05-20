import { Router } from 'express';
import confessions from '../test-data/fixtures';

const router = Router();

// we only define the subpath here; the resource path confessions/ will be added as middleware in app entry
router.get('/', (req, res) => {
    // get data from mongo
    // for now:
    return res.send(confessions);
});

router.post('/', (req, res) => {
    // post data to mongo
    // for now:
    return res.send({
        title: req.body.title,
        confession: req.body.confession
    });
});

export default router;
