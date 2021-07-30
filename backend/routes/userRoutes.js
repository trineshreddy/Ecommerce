import express from 'express'
const router = express.Router()
import { authUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser)
//below is equal to router.post('/login',authUser)
router.route('/login').post(authUser)

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)





export default router