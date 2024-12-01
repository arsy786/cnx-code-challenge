import { useFetchMetrics } from "../../hooks/useFetchMetrics";
import PrometheusMetricsDisplay from "./PrometheusMetricsDisplay";

const MetricsDisplay: React.FC = () => {
	const url = "http://localhost:3000/metrics";
	const options = { headers: { Authorization: "mysecrettoken" } };

	const { data, loading, error } = useFetchMetrics(url, options);

	if (loading) return <div>Loading Prometheus metrics...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>No metrics available</div>;

	return (
		<div>
			<PrometheusMetricsDisplay metrics={data} />
		</div>
	);
};

export default MetricsDisplay;
