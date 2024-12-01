import express from "express";

const router = express.Router();

// server check
router.get("/", (req, res) => {
	res.status(200).json({ alive: "true" });
});

// epoch time
router.get("/time", (req, res) => {
	const epochTime = Math.floor(Date.now() / 1000);

	const response = {
		epoch: epochTime,
	};

	res.status(200).json(response);
});

export default router;
