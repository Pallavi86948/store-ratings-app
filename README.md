# Store Ratings Web Application

This is a simple full-stack web application built using **React (frontend)**, **Node + Express (backend)**, and **MySQL** as the database.

The project was developed as part of an internship coding challenge.

---

##  Overview

The system allows users to log in with different roles:

- **System Administrator** – can manage users and stores.
- **Store Owner** – can see average ratings of their store.
- **Normal User** – can view stores and submit ratings (feature under progress).

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MySQL |
| ORM | Sequelize |
| Auth | JWT (JSON Web Token) |
| Styling | Basic CSS |

---

##  Features Implemented

 User authentication and role-based access  
 Login for Admin, User, and Store Owner  
 Admin dashboard with basic statistics  
 Database connection and seeding  
 Secure password hashing using bcrypt  
 JWT-based authentication  
 Clean folder structure (backend + frontend)  

---

##  Work in Progress

🔸 Normal user store listing and rating submission  
🔸 Owner dashboard UI enhancements  

These parts are being improved gradually.

---

##  Setup Instructions

### 1️ Backend Setup
```bash
cd backend
npm install
npm run seed     # create DB and seed admin/user/owner
npm run dev      # run backend server
Server runs at http://localhost:4000

### 2 Frontend Setup
cd frontend
npm install
npm run dev
Frontend runs at http://localhost:5173

Test Credentials::
| Role        | Email                                     | Password  |
| ----------- | ----------------------------------------- | --------- |
| Admin       | [admin@store.com](mailto:admin@store.com) | Admin@123 |
| Store Owner | [owner@store.com](mailto:owner@store.com) | Owner@123 |
| Normal User | [user@store.com](mailto:user@store.com)   | User@123  |

Auther: Pallavi Jadhav