# 💰 Expense Tracker MERN Application

A full-stack Expense Tracker web application built using the **MERN Stack** 🚀  
(MongoDB, Express.js, React.js, Node.js).

This application helps users manage and track their expenses with secure authentication 🔐, analytics charts 📊, and a responsive modern dashboard UI 🎨.

---

# ✨ Features

✅ User Authentication (Register/Login)  
✅ JWT Protected Routes 🔐  
✅ Add Expenses ➕  
✅ View Expenses 📋  
✅ Delete Expenses ❌  
✅ Expense Analytics Chart 📊  
✅ Total Expense Calculation 💵  
✅ Responsive UI 📱  
✅ Modern Dark Theme Dashboard 🌙  
✅ MongoDB Database Integration 🍃  

---

# 🛠️ Tech Stack

## 🎨 Frontend
- React.js ⚛️
- React Router DOM 🛣️
- Axios 🔗
- Recharts 📊
- CSS3 🎨

## ⚙️ Backend
- Node.js 🟢
- Express.js 🚂
- MongoDB 🍃
- Mongoose 🗂️
- JWT Authentication 🔐
- bcryptjs 🔒

---

# 📁 Folder Structure

```bash
Expense-Tracker-MERN/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

# ⚡ Installation

## 📥 Clone Repository

```bash
git clone YOUR_GITHUB_LINK
```

---

# 🔧 Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔑 Environment Variables

Create `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker
JWT_SECRET=mysecretkey
```

---

# 🌐 API Endpoints

## 🔐 Authentication

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## 💰 Expenses

### Get Expenses

```http
GET /api/expenses
```

### Add Expense

```http
POST /api/expenses
```

### Delete Expense

```http
DELETE /api/expenses/:id
```

---

# 📸 Screenshots

## 🔑 Login Page
Modern glassmorphism login UI with responsive design ✨

## 📊 Dashboard
Interactive expense dashboard with analytics chart and expense management 🚀

---

# 🚀 Future Improvements

🔹 Edit Expense Feature  
🔹 Search & Filters 🔍  
🔹 Monthly Reports 📅  
🔹 Dark/Light Theme Toggle 🌙☀️  
🔹 Cloud Deployment ☁️  
🔹 User Profile Management 👤  

---

# 👨‍💻 Author

Developed with ❤️ by **KRISHNA KARTHIK**

---

# 📜 License

This project is open-source and available under the **MIT License**.
