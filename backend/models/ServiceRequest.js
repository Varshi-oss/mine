import mongoose from 'mongoose';

const serviceRequestSchema = new mongoose.Schema({
  firstName: String,
  phoneNumber: String,
  serviceType: String,
  description: String,
  location: String,
  status: { type: String, default: 'Booked' },
  assignedTechnician: { type: mongoose.Schema.Types.ObjectId, ref: 'Technician' },
  createdAt: { type: Date, default: Date.now },
  technicianId: {
  type: String
}
});

const ServiceRequest = mongoose.model('ServiceRequest', serviceRequestSchema);
export default ServiceRequest;
