import { Router } from 'express';
import { registerOrRequestOtp, verifyOtpAndLogin } from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerOrRequestOtp);
router.post('/login', verifyOtpAndLogin);

export default router;
