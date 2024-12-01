import { useEffect, useState } from "react";

export const useFetchMetrics = (url: string, options?: RequestInit) => {
	const [data, setData] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchMetrics = async () => {
		setLoading(true);

		try {
			const response = await fetch(url, options);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const metrics = await response.text();
			setData(metrics);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchMetrics(); // Initial fetch

		// Set up the interval to fetch metrics data every 30 seconds
		const intervalId = setInterval(fetchMetrics, 30000);

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []); // Re-run if url or options change

	return { data, loading, error };
};