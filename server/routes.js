import { Router } from 'express';
import ApiController from './controller.js';

const router = Router();

router.get('/information',
  ApiController.getInfo
);

export default router;
