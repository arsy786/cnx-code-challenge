import { useFetchServerTime } from "../../hooks/useFetchServerTime";
import ServerTimeDisplay from "./ServerTimeDisplay";
import TimeDifferenceDisplay from "./TimeDifferenceDisplay";
import "./styles.css";

const TimeDisplay: React.FC = () => {
	const url = "http://localhost:3000/time";
	const options = { headers: { Authorization: "mysecrettoken" } };

	const { data, loading, error } = useFetchServerTime(url, options);

	if (loading) return <div className="loading-state">Loading times...</div>;
	if (error) return <div className="error-state">{error.message}</div>;
	if (!data) return <div className="loading-state">No times available</div>;

	return (
		<div>
			<ServerTimeDisplay data={data} />
			<TimeDifferenceDisplay serverTime={data.epoch} />
		</div>
	);
};

export default TimeDisplay;
