# Server Monitoring Dashboard App

This is a server monitoring app designed to provide crucial insights into server performance and response metrics. The app uses Express.js and Node.js for server-side functionality, and React.js for a dynamic front-end user experience.

## Getting Started

This project is divided into two main parts: the backend and the frontend. Follow these steps to set up and run both parts of the application.

### Prerequisites

- Git
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

   The backend should now be running on `http://localhost:3000`

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

   The frontend should now be running on `http://localhost:3001`

### Accessing the Application

After starting both the backend and frontend servers, you can access the web application by navigating to `http://localhost:3001` in your web browser. Ensure both servers are running concurrently to allow the frontend to communicate with the backend effectively.

## Backend

The backend provides the following endpoints:

    - GET /time - Get the most recently fetched server time in epoch seconds
    - GET /metrics - Get all Prometheus metrics

## Frontend

The frontend provides the following features:

    - View recently fetched server time
    - View difference between current and server time
    - View Prometheus metrics
