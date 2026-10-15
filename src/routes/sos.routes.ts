import { Router, Request, Response } from 'express';

const router = Router();

// Trigger SOS Emergency
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, latitude, longitude, accuracy } = req.body;
    
    if (!userId || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ error: 'Missing required location or user data' });
    }

    // TODO: Save SOS event in database via Prisma and trigger escalation engine
    const sosEvent = {
      id: 'sos_' + Date.now(),
      userId,
      status: 'ACTIVE',
      latitude,
      longitude,
      createdAt: new Date().toISOString()
    };

    return res.status(201).json({ message: 'SOS triggered successfully', sosEvent });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to process SOS emergency' });
  }
});

// Cancel SOS Emergency
router.post('/:id/cancel', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // TODO: Update SOS status to CANCELLED in database
    return res.status(200).json({ message: `SOS event ${id} has been cancelled.` });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
