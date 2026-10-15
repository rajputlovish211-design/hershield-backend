import { Request, Response } from 'express';

export const registerOrRequestOtp = async (req: Request, res: Response) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // TODO: Connect with real SMS provider (e.g., Twilio / Fast2SMS) to send OTP
    // For now, generating a dummy OTP flow
    console.log(`OTP sent to ${phoneNumber}`);

    return res.status(200).json({ 
      success: true, 
      message: 'OTP sent successfully to the phone number.' 
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error during registration' });
  }
};

export const verifyOtpAndLogin = async (req: Request, res: Response) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ error: 'Phone number and OTP are required' });
    }

    // TODO: Verify OTP from DB/Cache and generate JWT token via Prisma
    if (otp !== '1234') { // Dummy check for development
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token: 'sample_jwt_access_token_hershield'
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error during login' });
  }
};
