import cors from "cors";
import express from "express";
import promMiddleware from "express-prometheus-middleware";
import { authMiddleware } from "./middleware/auth.js";
import { errorMiddleware } from "./middleware/error.js";
import router from "./routes/route.js";

// create express app
const app = express();

// middleware
app.use(express.json());
app.use(cors({ origin: true }));
app.use(authMiddleware);
app.use(
	promMiddleware({
		metricsPath: "/metrics",
		collectDefaultMetrics: true,
		requestDurationBuckets: [0.1, 0.5, 1, 1.5],
	})
);

// router
app.use("/", router);

// global error handling
app.use(errorMiddleware);

export default app;
