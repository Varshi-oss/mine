import Technician from '../models/Technician.js';
import ServiceRequest from '../models/ServiceRequest.js';

// Book a technician
export const bookTechnician = async (req, res) => {
  try {
    const {
      firstName,
      phoneNumber,
      serviceType,
      description,
      location,
      assignedTechnician
    } = req.body;

    const technician = await Technician.findById(assignedTechnician);
    if (!technician) {
      return res.status(404).json({ message: 'Technician not found' });
    }

   const request = new ServiceRequest({
      firstName,
      phoneNumber,
      serviceType,
      description,
      location,
      assignedTechnician: technician._id,
      technicianId: technician.technicianId // ✅ readable ID
    });

    await request.save();
    res.status(201).json({ message: 'Service booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
};

// Get requests by user phone number
export const getUserRequests = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    const requests = await ServiceRequest.find({ phoneNumber });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user requests', error: error.message });
  }
};

// Get requests assigned to technician by technicianId
export const getTechnicianRequests = async (req, res) => {
  try {
    const { technicianId } = req.params;

    const technician = await Technician.findOne({ technicianId });
    if (!technician) {
      return res.status(404).json({ message: 'Technician not found' });
    }

    const requests = await ServiceRequest.find({ assignedTechnician: technician._id });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch technician work', error: error.message });
  }
};
