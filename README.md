1.Task Manager API (NestJS)

A secure task management backend built using NestJS, TypeORM, MySQL, and JWT authentication.

Setup Instructions
git clone <your-repo-url>
cd task-manager
npm install


2. Create .env from .env.example and fill values:

JWT_SECRET=your_jwt_secret
USER_NAME=<your_username>
USER_PASS=<your_password>

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=taskdb


3. Start server:

   npm run start:dev


Server runs on:
http://localhost:3000

Authentication
Login to receive JWT token:
POST /auth/login


Use token in headers for all APIs:

Authorization: Bearer <token>

API Endpoints

Method	Endpoint	Description

POST	/auth/login	Get JWT token
POST	/team	Create team with members
POST	/tasks	Create task
PATCH	/tasks/:taskId/assign/:memberId	Assign task
PATCH	/tasks/:id/status	Update task status
GET	/tasks	Get tasks with assignee

Demo

Postman collection included:
task-manager.postman_collection.json


Import into Postman and run requests in this order:

Login
Create Team
Create Task
Assign Task
Update Status
Get Tasks

Tech Stack

1. NestJS
2. TypeORM
3. MySQL
4. JWT Authentication