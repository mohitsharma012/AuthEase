# AuthEase

**AuthEase** is a user authentication system that enables secure login and signup functionalities. It is built using React for the frontend, Node.js with Express for the backend, and MongoDB as the database.

## Features

- User Registration and Login
- JWT-based Authentication
- Password Hashing with bcrypt
- Responsive UI

## Technologies Used

- **Frontend**: React, CSS, HTML
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js
- MongoDB

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mohitsharma012/AuthEase.git
   cd AuthEase
   ```

2. Install dependencies:

   ```bash
   cd Server
   npm install
   cd ../Client
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `Server` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start the servers:

   ```bash
   cd Server
   npm start
   cd ../Client
   npm start
   ```

5. Access the application at `http://localhost:3000`.

## Project Structure

```plaintext
AuthEase/
├── Client/
├── Server/
├── README.md
```

## API Endpoints

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Log in an existing user
- **GET /api/dashboard/get-data**: Retirving user data using token


## Developer 
Mohti Sharma
https://mohitji.site/
