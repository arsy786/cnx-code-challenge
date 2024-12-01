import React, { useEffect, useState } from "react";

interface TimeDifferenceDisplayProps {
	serverTime: number;
}

const TimeDifferenceDisplay: React.FC<TimeDifferenceDisplayProps> = ({
	serverTime,
}) => {
	const [timeDifference, setTimeDifference] = useState<string>("00:00:00");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const clientTime = Date.now() / 1000;
			const differenceInSeconds = Math.abs(clientTime - serverTime);

			const hours = Math.floor(differenceInSeconds / 3600)
				.toString()
				.padStart(2, "0");
			const minutes = Math.floor((differenceInSeconds % 3600) / 60)
				.toString()
				.padStart(2, "0");
			const seconds = Math.floor(differenceInSeconds % 60)
				.toString()
				.padStart(2, "0");

			setTimeDifference(`${hours}:${minutes}:${seconds}`);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [serverTime]);

	return (
		<div>
			<h2>Time Difference</h2>
			<p>Time difference: {timeDifference}</p>
		</div>
	);
};

export default TimeDifferenceDisplay;
