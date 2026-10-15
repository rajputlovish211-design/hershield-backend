import { Router } from 'express';
import { triggerSos, cancelSos } from '../controllers/sos.controller';

const router = Router();

router.post('/', triggerSos);
router.post('/:id/cancel', cancelSos);

export default router;
