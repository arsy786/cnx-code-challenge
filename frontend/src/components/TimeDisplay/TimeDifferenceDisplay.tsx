import { useEffect, useState } from "react";
import "./styles.css";

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
		<div className="display-container">
			<h2 className="display-title">Time Difference</h2>
			<p className="time-display-content">
				<span>(stopwatch format)</span>
				<br />
				<span className="time-difference-highlight"> {timeDifference}</span>
			</p>
		</div>
	);
};

export default TimeDifferenceDisplay;
