# Full-Stack E-Commerce Platform 🛒

A complete MERN-style e-commerce application featuring product management, global state handling, JWT authentication, and secure image uploads.

---

## 📑 Project Overview

This project is divided into two main sections:
1. **React Front-end**: Focuses on UI/UX, routing, and state management.
2. **Backend & Auth**: Focuses on security, file handling, and API testing.

## ✨ Features

### 💻 Front-End (React)
- **ProductList**: Dynamic grid view of products using Axios.
- **ProductDetail**: Detailed view of individual items.
- **Cart System**: Global state management using **React Context API**.
- **Navigation**: Client-side routing with **React Router**.
- **Checkout**: Summary of items with total price calculation.

### 🔐 Backend & Testing
- **JWT Auth**: User registration and login with encrypted passwords (bcrypt).
- **Image Uploads**: Integration with **Multer/Cloudinary** for product media.
- **Payment Mockup**: Simulated payment gateway with success/failure logic.
- **Validation**: Strict data validation for all user inputs.
- **Postman**: Fully tested API endpoints for all CRUD operations.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Axios, React Router, Context API.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (via Mongoose).
- **Authentication**: JSON Web Tokens (JWT).
- **Storage**: Multer / Cloudinary.

---

## 📂 Project Structure

```text
├── client/                # React application
│   ├── src/
│   │   ├── components/    # ProductList, Detail, Cart, Checkout
│   │   ├── context/       # CartContext.js (Global State)
│   │   └── services/      # api.js (Axios Instance)
└── server/                # Express application
    ├── routes/            # Auth, Payment, and Upload routes
    ├── middleware/        # Auth & Multer guards
    └── models/            # Database Schemas

🚀 Installation & SetupClone the RepoBashgit clone [https://github.com/yourusername/ecommerce-practical.git](https://github.com/yourusername/ecommerce-practical.git)
Backend SetupBashcd server
npm install
# Add your .env (JWT_SECRET, CLOUDINARY_URL, etc.)
npm start
Frontend SetupBashcd client
npm install
npm start
🧪 API Endpoints (Postman Tested)MethodEndpointDescriptionPOST/api/auth/registerRegister new userPOST/api/auth/loginUser login & get JWTGET/api/productsFetch all productsPOST/api/uploadUpload product imagePOST/api/paymentProcess mockup payment🌐 DeploymentFrontend: Hosted on [Vercel/Netlify]Backend: Hosted on [Render/Railway]
