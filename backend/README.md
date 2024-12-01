# Backend

This README is specifically for backend-related tasks. For instructions on running the full-stack application, please refer to the main project `README.md` in the root directory.

## Start the Server

Start the server in production mode:

```bash
npm run start
```

## Development mode

Start the server with automatic restarts on file changes using `nodemon`:

```bash
npm run dev
```

## Linting

Linting helps enforce consistent code style and identify potential issues.

To run the linter and check for code quality issues:

```bash
npm run lint
```

To automatically fix fixable issues:

```bash
npm run lint:fix
```

## Testing

This project uses Jest for testing.

To run all tests:

```bash
npm run test
```

To run tests in watch mode (automatically re-runs tests on file changes):

```bash
npm run test:watch
```
