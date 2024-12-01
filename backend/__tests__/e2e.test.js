import request from "supertest";
import app from "../app";

describe("E2E Tests", () => {
	describe("GET /time", () => {
		it("should return the current server time in epoch seconds with valid token", async () => {
			const response = await request(app)
				.get("/time")
				.set("Authorization", "mysecrettoken");

			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty("epoch");
			expect(typeof response.body.epoch).toBe("number");
		});

		it("should return 403 Forbidden if no Authorization header is provided", async () => {
			const response = await request(app).get("/time");

			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty("error", "Forbidden");
		});

		it("should return 403 Forbidden if Authorization header has incorrect value", async () => {
			const response = await request(app)
				.get("/time")
				.set("Authorization", "wrongtoken");

			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty("error", "Forbidden");
		});
	});

	describe("GET /metrics", () => {
		it("should return metrics in Prometheus format with valid token", async () => {
			const response = await request(app)
				.get("/metrics")
				.set("Authorization", "mysecrettoken");

			expect(response.status).toBe(200);
			expect(response.text).toContain("# HELP");
			expect(response.text).toContain("# TYPE");
		});

		it("should return 403 Forbidden if no Authorization header is provided", async () => {
			const response = await request(app).get("/metrics");

			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty("error", "Forbidden");
		});

		it("should return 403 Forbidden if Authorization header has incorrect value", async () => {
			const response = await request(app)
				.get("/metrics")
				.set("Authorization", "wrongtoken");

			expect(response.status).toBe(403);
			expect(response.body).toHaveProperty("error", "Forbidden");
		});
	});
});
