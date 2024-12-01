import { useEffect, useState } from "react";
import { formatTimeDifference } from "../../utils/formatTime";
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
			const difference = Math.abs(clientTime - serverTime);
			const formattedDifference = formatTimeDifference(difference);
			setTimeDifference(formattedDifference);
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
