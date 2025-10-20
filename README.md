<img width="1911" height="936" alt="Screenshot 2025-10-20 232607" src="https://github.com/user-attachments/assets/b308c8d0-9dc5-4276-898d-916b6a75b822" />
<img width="1919" height="946" alt="Screenshot 2025-10-20 232552" src="https://github.com/user-attachments/assets/8502c2be-f989-4ecd-8927-d001c7c9de41" />
<img width="1917" height="947" alt="Screenshot 2025-10-20 232524" src="https://github.com/user-attachments/assets/f2175039-b8c3-47fe-a020-fd14c07fa959" />
<img width="1918" height="954" alt="Screenshot 2025-10-20 232456" src="https://github.com/user-attachments/assets/8b4ded72-3f92-4798-b7a7-9e109b6bece3" />
<img width="1919" height="946" alt="Screenshot 2025-10-20 232400" src="https://github.com/user-attachments/assets/6748ac54-6812-4969-92b3-31d26449933f" />
<img width="1919" height="945" alt="Screenshot 2025-10-20 232350" src="https://github.com/user-attachments/assets/0800f122-1102-4e59-bed5-4b711b18e285" />
<img width="1911" height="929" alt="Screenshot 2025-10-20 232336" src="https://github.com/user-attachments/assets/ef5708ca-992d-4610-8b5a-8f20a85ff221" />
<img width="1919" height="988" alt="Screenshot 2025-10-20 232322" src="https://github.com/user-attachments/assets/cbee4ae3-023f-4157-bf3d-8cb7234835ea" />
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
