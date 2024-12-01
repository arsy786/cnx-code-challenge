interface PrometheusMetricsDisplayProps {
	metrics: string;
}

const PrometheusMetricsDisplay: React.FC<PrometheusMetricsDisplayProps> = ({
	metrics,
}) => {
	return (
		<div>
			<h1>Prometheus Metrics</h1>
			<pre>{metrics}</pre>
		</div>
	);
};

export default PrometheusMetricsDisplay;
