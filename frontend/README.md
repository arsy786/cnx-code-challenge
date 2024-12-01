# Frontend

This README is specifically for frontend-related tasks using Vite and TypeScript. For general project instructions, refer to the main project README.md in the root directory.

## Scripts

Below are the available scripts for the frontend. Run these commands from the frontend directory:

### Development Mode

Start the Vite development server to run the app in development mode:

```bash
npm run dev
```

This will start the app at `http://localhost:3001` (or another port if configured), with hot module replacement (HMR) for faster development.

### Build the Application

Build the project for production by first compiling TypeScript and then running the Vite build process:

```bash
npm run build
```

This will create a production-ready version of your app in the dist directory.

### Preview the Production Build

Preview the production build locally before deploying it:

```bash
npm run preview
```

This will start a local server to serve the production build from the dist directory.

### Linting

Run ESLint to identify code quality and style issues:

```bash
npm run lint
```
