export const errorMiddleware = (err, req, res, next) => {
	// eslint-disable-next-line no-console
	console.error(err.stack);
	res.status(500).json({ message: "Internal Server Error" });
};
