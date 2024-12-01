import express from "express";

const router = express.Router();

// Root route. It is used to check if the server is running.
router.get("/", (req, res) => {
	res.status(200).json({ alive: "true" });
});

// PROM ROUTES
router.get("/time", (req, res) => {
	// Get the current server time in epoch seconds
	const epochTime = Math.floor(Date.now() / 1000);

	// Response object with the server time
	const response = {
		epoch: epochTime,
	};

	// Return the response as JSON
	res.status(200).json(response);
});

router.get("/error", (req, res) => {
	// Simulate an error
	throw new Error("This is a test error.");
});
export default router;
