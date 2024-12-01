import "./styles.css";

interface PrometheusMetricsDisplayProps {
	metrics: string;
}

const PrometheusMetricsDisplay: React.FC<PrometheusMetricsDisplayProps> = ({
	metrics,
}) => {
	return (
		<div className="display-container">
			<h1 className="display-title">Prometheus Metrics</h1>
			<pre className="metrics-pre-container">{metrics}</pre>
		</div>
	);
};

export default PrometheusMetricsDisplay;
