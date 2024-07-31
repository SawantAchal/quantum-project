# Quantum Project
## Overview
This project is a Full Stack Development application that includes user authentication and a dashboard displaying user data. It is designed to help manage users, roles, and statuses. The application uses React for the frontend, Express and MongoDB for the backend, and Bootstrap for styling.

## Features
1. User Registration: Allows users to sign up with their name, date of birth, email, and password.
2. User Login: Authenticates users and stores their session token.
3. Dashboard: Displays a table of users with their details, including name, date created, role, status, and actions to manage them.
4. Responsive Design: Ensures the application is usable on both desktop and mobile devices.

## Technologies Used
Frontend: React, React-Bootstrap
Backend: Express.js, Node.js, MongoDB, Mongoose
Styling: Bootstrap, FontAwesome

## Getting Started

### Prerequisites
Node.js and npm
MongoDB instance (local or cloud-based)
Git

## Setup Instructions

### Clone the repository

bash

```git clone https://github.com/SawantAchal/quantum-project)```

```cd quantum-project```

### Install dependencies

1. Frontend

bash

```cd frontend```

```npm install```

2. Backend
   
```cd backend```

```npm install```

### Setup MongoDB

1. Create a MongoDB database and note the connection URL.

2.. Update the .env file with your MongoDB connection string.

### Environment Configuration

Create a .env file in the backend directory with the following environment variables:

PORT=4000 
MONGO_URI=your-mongodb-connection-string 
SECRET_KEY=your-secret-key 

### Start the Backend Server

bash

```cd backend```

```npm start```

### Start the Frontend Development Server

bash

```cd frontend```

```npm start```

### Usage
Registration: Navigate to the / route to sign up a new user.
Login: Navigate to the "/" route to authenticate and obtain a token.
Dashboard: Upon logging in, users are redirected to the "/dashboard" route, where they can view and manage user details.


## Note: If on login the dashboard does not appear, try refreshing the page.
