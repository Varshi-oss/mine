import express from 'express';
import {
  bookTechnician,
  getUserRequests,
  getTechnicianRequests
} from '../controllers/serviceController.js';

const serviceRouter = express.Router();

serviceRouter.post('/book', bookTechnician);
serviceRouter.get('/user/:phoneNumber', getUserRequests);
serviceRouter.get('/technician/:technicianId', getTechnicianRequests);

export default serviceRouter;
