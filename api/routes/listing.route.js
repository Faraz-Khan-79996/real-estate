import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { isLoggedIn } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/create', isLoggedIn, createListing);

export default router;