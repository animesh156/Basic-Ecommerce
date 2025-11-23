# 🍔 Foodzy – Modern Food & Grocery Ecommerce Platform

A fully responsive, modern ecommerce web application featuring:

- 🛒 Product browsing  
- 🛍️ Add-to-cart with Zustand  
- 🔐 OTP-based checkout verification  
- 📦 Order placement into Neon PostgreSQL  
- 📨 Email notifications after order  
- ⚡ Fast Node.js + Express Backend  
- 🎨 Beautiful UI built with React + TailwindCSS  
- 🧰 **Zustand for global state management (cart items)**  

---

## 🚀 Tech Stack

### **Frontend**
- React.js  
- TypeScript  
- TailwindCSS  
- React Icons  
- **Zustand (Cart Store)**  

### **Backend**
- Node.js  
- Express.js  
- TypeScript  
- PostgreSQL (Neon)  
- Nodemailer (Email Service)  

---

# 🔧 Installation & Setup Guide

This section explains how to install and run both **Backend** and **Frontend**.

---

# ⚙️ Backend Setup (Node.js + Express + PostgreSQL)

### 1️⃣ Navigate to backend folder
```bash
cd backend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```
PORT=5000
DATABASE_URL=your_neon_postgresql_url_here
SMTP_USER=your_gmail_here@gmail.com
SMTP_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ Start backend server
```bash
npm run dev
```

Backend runs at ➤ http://localhost:5000

---

# 🎨 Frontend Setup (React + Vite + Tailwind + Zustand)

### 1️⃣ Navigate to frontend folder
```bash
cd frontend
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```
VITE_BACKEND_URL=http://localhost:5000/api
```

### 4️⃣ Start frontend dev server
```bash
npm run dev
```

Frontend runs at ➤ http://localhost:5173

---

# 🧰 Required Global Tools

### ✔ Node.js (18+ recommended)
Check version:
```bash
node -v
```

### ✔ npm or yarn
```bash
npm -v
```

### ✔ PostgreSQL or Neon Cloud
Neon → https://neon.tech/

---

## 📁 Project Structure

```
backend/
 ├── src/
 │   ├── config/
 │   ├── controllers/
 │   ├── routes/
 │   ├── services/
 │   ├── db/
 │   └── index.ts
 ├── package.json
 ├── tsconfig.json
 └── README.md

frontend/
 ├── src/
 │   ├── components/
 │   ├── pages/
 │   ├── features/store
 │   ├── assets/
 │   └── App.tsx
 ├── index.html
 ├── package.json
 └── README.md
```

---

# 🔄 **App Flow (User Journey)**

## **1️⃣ Browse Products**
- Products load from backend (cached in LocalStorage)

## **2️⃣ Add Item to Cart**
- Stores item in Zustand cart store

## **3️⃣ Checkout Page**
- User enters email → OTP is sent automatically

## **4️⃣ Verify OTP**
- User enters OTP  
- If correct → Enable "Place Order" button  

## **5️⃣ Place Order**
- Order stored in PostgreSQL  
- Confirmation email sent with order details  

## **6️⃣ Success Page**
- User sees confirmation message  

---

## 🧪 API Endpoints

### **OTP**
- POST `/otp/send-otp`
- POST `/otp/verify`

### **Orders**
- POST `/order/place-order`

---

## 🗄️ Database Schema (Neon PostgreSQL)

### `otp` Table  
- id  
- email  
- otp  
- expires_at  

### `orders` Table  
- id  
- email  
- items   
- amount  
- created_at  

---

## 🎨 UI Features  
- Responsive  
- Product grid  
- Detailed product page  
- Zustand cart  
- OTP checkout  
