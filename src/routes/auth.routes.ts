import { Router, Request, Response } from 'express';

const router = Router();

// Register / Request OTP endpoint
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    // TODO: Integrate SMS OTP provider and database save
    return res.status(200).json({ message: 'OTP sent successfully', phoneNumber });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify OTP & Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: 'Phone number and OTP are required' });
    }
    // TODO: Validate OTP and issue JWT token
    return res.status(200).json({ message: 'Login successful', token: 'sample_jwt_token' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
