import { Router } from 'express';
import confessions from '../test-data/fixtures';

const router = Router();

// we only define the subpath here; the resource path confessions/ will be added as middleware in app entry
router.get('/', (req, res) => {
    return res.send(confessions);
});

router.post('/', (req, res) => {
    return res.send(`Well you sent me this: ${req.body.text}`);
});

export default router;
