import { useFetchMetrics } from "../../hooks/useFetchMetrics";
import PrometheusMetricsDisplay from "./PrometheusMetricsDisplay";
import "./styles.css";

const MetricsDisplay: React.FC = () => {
	const url = "http://localhost:3000/metrics";
	const options = { headers: { Authorization: "mysecrettoken" } };

	const { data, loading, error } = useFetchMetrics(url, options);

	if (loading) return <div className="loading-state">Loading metrics...</div>;
	if (error) return <div className="error-state">Error: {error.message}</div>;
	if (!data) return <div className="loading-state">No metrics available</div>;

	return (
		<div>
			<PrometheusMetricsDisplay metrics={data} />
		</div>
	);
};

export default MetricsDisplay;
