# LOREM IPSUM App

This is a simple LOREM IPSUM app designed for managing LOREM IPSUM with ease. The app uses Express and Node.js for server-side functionality, and React.js for a dynamic front-end user experience.

## Getting Started

This project is divided into two main parts: the backend and the frontend. Follow these steps to set up and run both parts of the application.

### Prerequisites

- Node.js

### Cloning the Repo

1. Open your terminal or command prompt.

2. Clone the repository using Git:

   ```bash
   git clone https://github.com/arsy786/cnx-code-challenge.git
   ```

3. Navigate to the cloned repository's root directory

   ```bash
   cd cnx-code-challenge
   ```

### Setting up the Backend

1. From the root directory, navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the required Node.js modules:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following:

   ```env
   PORT=3000
   ```

4. Start the backend:

   ```bash
   npm run dev
   ```

   The backend should now be running on `http://localhost:3000`.

### Setting up the Client

1. Open a new terminal or command prompt window.

2. From the root directory, navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install the required Node.js modules:

   ```bash
   npm install
   ```

4. Start the frontend:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:3001`.

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3001` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.

## Backend

The backend provides a REST API for LOREM IPSUM. Here are the available endpoints:

    - GET /time - Get LOREM IPSUM
    - GET /metrics - Get all Prometheus metrics

## Frontend

The app provides the following features:

    - View a LOREM IPSUM
    - Update a LOREM IPSUM
