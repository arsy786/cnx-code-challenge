# Backend

This README is specifically for backend-related tasks. For instructions on running the full-stack application, please refer to the main project `README.md` in the root directory.

## Scripts

Below are the available scripts for the backend. Run these commands from the `backend` directory:

### Start the Server

Start the server in production mode:

```bash
npm run start
```

This will start the server at `http://localhost:3000` (or another port if configured).

### Development mode

Start the server with automatic restarts on file changes:

```bash
npm run dev
```

### Testing

To run all tests:

```bash
npm run test
```

To run tests in watch mode (automatically re-runs tests on file changes):

```bash
npm run test:watch
```

### Linting

Run ESLint to identify code quality and style issues:

```bash
npm run lint
```

To automatically fix fixable issues:

```bash
npm run lint:fix
```
