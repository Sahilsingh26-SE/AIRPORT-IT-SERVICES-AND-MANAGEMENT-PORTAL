# ✈️ Airport IT Service & Asset Management Portal - Backend

Backend API for the Airport IT Service & Asset Management Portal. It provides authentication, ticket management, dashboard APIs, and asset management using Node.js, Express, MongoDB, and JWT.

## Features

* User Registration
* User Login
* JWT Authentication
* Dashboard API
* Ticket CRUD APIs
* Asset APIs
* MongoDB Database

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Dotenv

## Installation

```bash
npm install
npm start
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

The backend runs on:

```
http://localhost:5000
```

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/me`

### Tickets

* POST `/api/tickets`
* GET `/api/tickets`
* GET `/api/tickets/:id`
* PUT `/api/tickets/:id`
* DELETE `/api/tickets/:id`

### Dashboard

* GET `/api/dashboard`

### Assets

* GET `/api/assets`

## Future Improvements

* Password Encryption
* Role-Based Authorization
* Email Notifications
* File Uploads
* Audit Logs
* Reports & Analytics

## Author

**Sahil Singh**
B.Tech CSE

