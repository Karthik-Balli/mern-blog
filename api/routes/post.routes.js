import express from 'express';
import { getposts } from '../controllers/post.controller.js';

const router = express.Router();

router.get('/getposts', getposts);

export default router;