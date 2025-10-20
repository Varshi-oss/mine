🛠️ Technician Booking System
A full-stack web application that allows users to book technicians for various services, track booking status, and view technician details including ID, availability, and service history.

🚀 Features
User Authentication: Secure login/signup with JWT-based sessions

Technician Search & Booking: Browse available technicians by service type and location

Real-Time Status Updates: View booking status with technician ID and time slot

Admin Dashboard: Manage technicians, services, and bookings

Responsive UI: Mobile-friendly design with intuitive navigation

🧰 Tech Stack
Layer	Technology
Frontend	React.js, Tailwind CSS
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Authentication	JWT, bcrypt
Deployment	Vercel (Frontend), Render (Backend)
API Testing	Postman
⚙️ Setup Instructions
1. Clone the Repository
bash


Copy
git clone https://github.com/your-username/technician-booking-system.git
cd technician-booking-system
2. Install Dependencies
Backend
bash


Copy
cd server
npm install
Frontend
bash


Copy
cd client
npm install
3. Environment Variables
Create a .env file in the server directory with the following:

env


Copy
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
4. Run the App
Backend
bash


Copy
npm start
Frontend
bash


Copy
npm run dev
