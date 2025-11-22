# 🍔 Foodzy – Modern Food & Grocery Ecommerce Platform

A fully responsive, modern ecommerce web application featuring:

- 🛒 Product browsing  
- 🔐 OTP-based checkout verification  
- 📦 Order placement  
- 📨 Email notifications  
- 🗄️ Neon PostgreSQL database  
- ⚡ Fast API with Node.js + Express  
- 🎨 Stylish responsive UI with React + TailwindCSS  
- 🧰 **Zustand for global state management (cart items, UI state)**  

---

## 🚀 Tech Stack

### **Frontend**
- React.js  
- TypeScript  
- Tailwind CSS  
- React Icons  
- **Zustand (state management for cart & global UI)**

### **Backend**
- Node.js  
- Express.js  
- TypeScript  
- PostgreSQL (Neon)  
- Nodemailer  

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
 │   ├── features/store      <-- Zustand cart store here
 │   ├── assets/
 │   └── App.tsx
 ├── index.html
 ├── package.json
 └── README.md
```

---

## 🛠️ Backend Setup

### 1️⃣ Install dependencies
```bash
cd backend
npm install
```

### 2️⃣ Create `.env` file

```
DATABASE_URL=postgresql://your-neon-url?sslmode=require
SMTP_USER=youremail@gmail.com
SMTP_PASS=your-email-app-password
PORT=5000
```

### 3️⃣ Start in development
```bash
npm run dev
```

---

## 🍽️ Frontend Setup

### Install dependencies
```bash
cd frontend
npm install
```

### Run development server
```bash
npm run dev
```

---

## 📦 Key Features

### 🔐 OTP Verification System  
Before checkout, users verify their identity using OTP email authentication.

### 🛒 Product Display  
Clean grid-based layout with images, price, rating, and category filters.

### 🧰 **Zustand Cart Management**  
- Add/Clears items from cart    
- Global store accessible throughout the app  
- Lightweight alternative to Redux  

### 📃 Detailed Product Page  
Detailed descriptions with add-to-cart functionality.

### 📬 Order Placement  
Order is stored in PostgreSQL + confirmation email sent.

### ⭐ Responsive Footer  
- Brand info + logo  
- Company links  
- Categories  
- Newsletter subscription  
- Social icons  
- 5 image icons grid  

---

## 🧪 API Endpoints

### **OTP Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/otp/send-otp` | Sends OTP email |
| POST | `/otp/verify` | Verifies OTP |

### **Order Routes**
| Method | Route | Description |
|--------|--------|-------------|
| POST | `/order/place-order` | Stores order in DB + sends email |

---

## 🗄️ Database (Neon PostgreSQL)

Tables auto-created:

### `otp` Table
| Column | Type |
|--------|------|
| id | SERIAL |
| email | VARCHAR |
| otp | VARCHAR |
| expires_at | TIMESTAMP |

### `orders` Table
| Column | Type |
|--------|------|
| id | SERIAL |
| email | VARCHAR |
| items | JSONB |
| amount | INT |
| created_at | TIMESTAMP |

---

## 🎨 UI Features
- Responsive design with TailwindCSS  
- Modern and clean look  
- Footer with search bar, icons, and image grid  
- Smooth state-driven cart interactions (Zustand)  

---

