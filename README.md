Task Manager (NestJS)

A secure backend system for managing teams and tasks, built with NestJS, MySQL, and TypeORM, with full JWT authentication and task workflow support.

* git clone <your-repo-url>
* cd task-manager
* npm install

Create a .env file from .env.example and fill in values:

* JWT_SECRET=<your_jwt_secret>
* USER_NAME=<your_username>
* USER_PASS=<your_password>
* DB_HOST=localhost
* DB_PORT=3306
* DB_USER=root
* DB_PASS=<your_mysql_password>
* DB_NAME=taskdb

Start server:
npm run start:dev

Server runs on:
http://localhost:3000

Authentication

Login to receive JWT token:
* POST /auth/login

Use token in headers for all APIs:

Authorization: Bearer <token>

API Endpoints

1. POST /auth/login — Get JWT token
2. POST /team — Create team with members
3. POST /tasks — Create task
4. PATCH /tasks/:taskId/assign/:memberId — Assign task
5. PATCH /tasks/:id/status — Update task status
6. GET /tasks — Get tasks with assignee

Demo

Postman collection included:
* task-manager.postman_collection.json

Import into Postman and run requests in this order:

1. Login
2. Create Team
3. Create Task
4. Assign Task
5. Update Status
6. Get Tasks

Tech Stack

1. NestJS
2. TypeORM
3. MySQL
4. JWT Authentication
