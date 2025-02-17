import express from 'express';
import { create } from '../controllers/post.controller.js';

const router = express.Router();


// Post route is need to have verified tocken
// router.get('/getposts', getposts);

router.post('/create', create);

export default router;