import express from 'express';
import { createListing , deleteListing , updateListing , getListing } from '../controllers/listing.controller.js';
import { isLoggedIn } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/create', isLoggedIn, createListing);
router.delete('/delete/:id', isLoggedIn, deleteListing);
router.post('/update/:id', isLoggedIn, updateListing);
router.get('/get/:id', getListing);

export default router;