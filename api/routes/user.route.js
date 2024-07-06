import express from 'express'
import {updateUserInfo} from '../controllers/user.controller.js'
import { isLoggedIn } from '../utils/authMiddleware.js';

const router = express.Router();

// router.get('/' , )

router.post('/update/:id' ,isLoggedIn , updateUserInfo)

export default router;