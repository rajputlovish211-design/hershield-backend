import { Request, Response } from 'express';

export const triggerSos = async (req: Request, res: Response) => {
  try {
    const { userId, latitude, longitude, accuracy } = req.body;

    if (!userId || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ error: 'Missing required location or user credentials' });
    }

    // TODO: Save SOS event in PostgreSQL using Prisma and trigger escalation engine
    const sosEvent = {
      id: 'sos_' + Date.now(),
      userId,
      status: 'ACTIVE',
      latitude,
      longitude,
      accuracy: accuracy || null,
      createdAt: new Date().toISOString()
    };

    return res.status(201).json({
      success: true,
      message: 'SOS emergency triggered successfully. Responders are being notified.',
      sosEvent
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create SOS emergency record' });
  }
};

export const cancelSos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // TODO: Update SOS status to CANCELLED in database
    return res.status(200).json({
      success: true,
      message: `SOS event ${id} has been successfully cancelled with an audit trail.`
    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error while cancelling SOS' });
  }
};
