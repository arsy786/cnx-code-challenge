import dotenv from "dotenv";
import app from "./app.js";

// load environment variables
dotenv.config();

// starting the server
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
