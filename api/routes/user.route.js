import express from 'express'
import {updateUserInfo , deleteUser , getUserListings , getUser} from '../controllers/user.controller.js'
import { isLoggedIn } from '../utils/authMiddleware.js';

const router = express.Router();

// router.get('/' , )

router.post('/update/:id' ,isLoggedIn , updateUserInfo)
router.delete('/delete/:id', isLoggedIn, deleteUser)
router.get('/listings/:id', isLoggedIn, getUserListings)
router.get('/:id', getUser)

export default router;