import express from "express";

const router = express.Router();

// PROM ROUTES
router.get("/time", (req, res) => {
	res.status(200).json({ time: Date.now() });
});
router.get("/metrics", (req, res) => {
	res.status(200).json({ metric: "true" });
});

export default router;
