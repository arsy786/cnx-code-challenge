import dotenv from "dotenv";
import express from "express";
import router from "./routes/route.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route. It is used to check if the server is running.
app.get("/", (req, res) => {
	res.status(200).json({ alive: "true" });
});

// Routing
app.use("/api/v1", router);

export default app;
