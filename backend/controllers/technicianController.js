import Technician from '../models/Technician.js';
import ServiceRequest from '../models/ServiceRequest.js';
import bcrypt from 'bcrypt';

// Register technician
export const registerTechnician = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      service,
      experience,
      fees,
      availability,
      about,
      location
    } = req.body;

    const existing = await Technician.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Technician already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const technician = new Technician({
      name,
      email,
      password: hashedPassword,
      service,
      experience,
      fees,
      availability,
      about,
      location
    });

    await technician.save();
    res.status(201).json({ message: 'Technician registered successfully', technicianId: technician._id });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Login technician
export const loginTechnician = async (req, res) => {
  try {
    const { email, password } = req.body;
    const tech = await Technician.findOne({ email });
    if (!tech) return res.status(404).json({ message: 'Technician not found' });

    const match = await bcrypt.compare(password, tech.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', technicianId: tech._id });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// Get service requests assigned to technician
export const getTechnicianRequests = async (req, res) => {
  try {
    const technicianId = req.params.id;
    const requests = await ServiceRequest.find({ assignedTechnician: technicianId });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch requests', error: error.message });
  }
};

// Get all technicians
export const getAllTechnicians = async (req, res) => {
  try {
    const technicians = await Technician.find();
    res.json(technicians);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch technicians', error: error.message });
  }
};
