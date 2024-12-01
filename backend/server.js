import dotenv from "dotenv";
import app from "./app.js";

// load environment variables
dotenv.config();

// starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
