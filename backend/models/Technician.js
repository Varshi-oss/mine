import mongoose from 'mongoose';

const technicianSchema = new mongoose.Schema({
  technicianId: { type: String, required: true, unique: true }, // ✅ NEW
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  service: { type: String, required: true },
  experience: { type: String, required: true },
  fees: { type: Number, required: true },
  availability: { type: String, default: 'Available' },
  about: { type: String },
  location: { type: String }
}, { timestamps: true });


export default mongoose.model('Technician', technicianSchema);
