const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
	res.send("Hello, World!");
});

// Start the server
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on port ${port}`);
});
