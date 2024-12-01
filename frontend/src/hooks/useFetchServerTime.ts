import { useEffect, useState } from "react";

interface ServerTimeResponse {
	epoch: number;
}

export const useFetchServerTime = (url: string, options?: RequestInit) => {
	const [data, setData] = useState<ServerTimeResponse | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await fetch(url, options);

			if (!response.ok) {
				throw new Error(`HTTP error status: ${response.status}`);
			}

			const data = await response.json();
			setData(data);
		} catch (error) {
			setError(error as Error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();

		const intervalId = setInterval(fetchData, 30000);

		return () => clearInterval(intervalId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error };
};
