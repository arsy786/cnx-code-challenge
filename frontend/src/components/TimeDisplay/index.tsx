import React from "react";
import { useFetchServerTime } from "../../hooks/useFetchServerTime";
import ServerTimeDisplay from "./ServerTimeDisplay";
import TimeDifferenceDisplay from "./TimeDifferenceDisplay";

const TimeDisplay: React.FC = () => {
	const url = "http://localhost:3000/time";
	const options = { headers: { Authorization: "mysecrettoken" } };

	const { data, loading, error } = useFetchServerTime(url, options);

	if (loading) return <div>Loading server time...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>No server time available</div>;

	return (
		<div>
			<ServerTimeDisplay data={data} />
			<TimeDifferenceDisplay serverTime={data.epoch} />
		</div>
	);
};

export default TimeDisplay;
