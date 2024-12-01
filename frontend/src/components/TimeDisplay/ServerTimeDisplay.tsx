import "./styles.css";

interface ServerTimeDisplayProps {
	data: {
		epoch: number;
	};
}

const ServerTimeDisplay: React.FC<ServerTimeDisplayProps> = ({ data }) => {
	return (
		<div className="display-container">
			<h1 className="display-title">Server Time</h1>
			<p className="time-display-content">
				<span>(epoch seconds)</span>
				<br />
				<span className="time-difference-highlight">{data.epoch}</span>
			</p>
		</div>
	);
};

export default ServerTimeDisplay;
