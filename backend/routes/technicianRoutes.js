
import express from 'express';
import {
  registerTechnician,
  loginTechnician,
  getTechnicianRequests,
  getAllTechnicians
} from '../controllers/technicianController.js';

const technicianRouter = express.Router();

technicianRouter.post('/register', registerTechnician);
technicianRouter.post('/login', loginTechnician);
technicianRouter.get('/:id/requests', getTechnicianRequests);
technicianRouter.get('/', getAllTechnicians); // ✅ This fixes the 404 on GET /api/technicians

export default technicianRouter;
