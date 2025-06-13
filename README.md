# React + Vite

# ✨ Lumo Event Manager

**HR Application** is a modern, full-stack web application designed to help users in Finland manage and explore summer events efficiently. The project is built using **Laravel (PHP)** for the backend and **React** for the frontend.

---

## 📦 Prerequisites

Before starting, make sure the following software is installed on your system:

-   🟢 **Node.js** (v16 or higher)
-   📦 **npm** (comes with Node.js)
-   🗃️ **Database** (e.g., MySQL or SQLite)

---

## 🚀 Setup Instructions

### 1. 🔁 Clone the Repository

```bash
git clone https://github.com/danielanthonyO/hrApp_react25k/tree/step-6-features
cd lumo-event-manager
```

---

### 2. 📥 Install Dependencies

#### 🔧 Backend (Laravel)

```bash
composer install
```

#### 🎨 Frontend (React)

```bash
npm install
```

---

### 3. ⚙️ Configure Environment Variables

Create a `.env` file by copying the example:

```bash
cp .env.example .env
```

Then open `.env` and update the database and other necessary configurations (DB name, username, password, etc).

---

### 4. 🔐 Generate Application Key

```bash
php artisan key:generate
```

---

### 5. 🗄️ Run Database Migrations

Ensure your database is created and running. Then run:

```bash
php artisan migrate
```

---

### 6. 🧱 Build Frontend Assets

Compile frontend assets using Vite:

```bash
npm run dev
```
