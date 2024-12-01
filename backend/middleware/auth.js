export const authMiddleware = (req, res, next) => {
	const authHeader = req.headers["authorization"];

	if (authHeader && authHeader === "mysecrettoken") {
		return next();
	} else {
		return res.status(403).json({ error: "Forbidden" });
	}
};
