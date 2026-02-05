# 🗂 Task Manager API (NestJS)

A secure backend application for managing teams and tasks.  
Built as part of a backend code challenge.

---

## 🚀 Features

### 🧑‍🤝‍🧑 Team Management
- Create teams with multiple members  
- Store member name and email  
- Teams linked with tasks  

### 📌 Task Management
- Create tasks with description and due date  
- Assign tasks to team members  
- Track task status (PENDING / IN_PROGRESS / DONE)  
- Fetch all tasks along with assignee details  

### 🔐 Authentication
- JWT-based authentication  
- All APIs protected using Bearer token  
- Hardcoded credentials stored in `.env`  

---

## 🛠 Technologies Used

- NestJS  
- TypeORM  
- MySQL  
- JWT Authentication  
- Postman (API testing)  

---

## ⚙️ Setup Instructions (Run Locally)

### 1️⃣ Clone the repository

git clone <your-repo-url>  
cd task-manager  

### 2️⃣ Install dependencies

npm install  

### 3️⃣ Create MySQL database

CREATE DATABASE taskdb;

### 4️⃣ Configure Environment

Create a `.env` file from `.env.example`:

JWT_SECRET=<your_jwt_secret>  
USER_NAME=<your_username>  
USER_PASS=<your_password>  

DB_HOST=localhost  
DB_PORT=3306  
DB_USER=root  
DB_PASS=<your_mysql_password>  
DB_NAME=taskdb  

### 5️⃣ Start development server

npm run start:dev  

Server runs at:  
http://localhost:3000  

---

## 🔐 Authentication

Login to receive JWT token:

POST /auth/login  

Use token in headers for all APIs:

Authorization: Bearer <token>  

---

## 📡 API Endpoints

POST /auth/login — Get JWT token  
POST /team — Create team with members  
POST /tasks — Create task  
PATCH /tasks/:taskId/assign/:memberId — Assign task  
PATCH /tasks/:id/status — Update task status  
GET /tasks — Get tasks with assignee  

---

## 🧪 Demo (Postman)

Postman collection included:

task-manager.postman_collection.json  

Import into Postman and run requests in this order:

1. Login  
2. Create Team  
3. Create Task  
4. Assign Task  
5. Update Status  
6. Get Tasks  

---

## 📦 Project Structure

src/  
 ├── auth/  
 ├── tasks/  
 ├── team/  
 ├── app.module.ts  
 └── main.ts  

---

## ⭐ Highlights

- Clean modular architecture  
- Entity relationships (Task ↔ TeamMember)  
- DTO validation  
- Secure route guards  
- Environment-based configuration  

---

## 📄 Notes

This is a backend-only application.  
Use Postman collection to test APIs.  

---

## 👤 Author

Developed by : Abhinav Tomar
