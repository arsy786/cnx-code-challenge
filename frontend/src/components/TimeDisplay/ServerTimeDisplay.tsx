import React from "react";

interface ServerTimeDisplayProps {
	data: {
		epoch: number;
	};
}

const ServerTimeDisplay: React.FC<ServerTimeDisplayProps> = ({ data }) => {
	return (
		<div>
			<h1>Server Time</h1>
			<p>Server time (epoch seconds): {data.epoch}</p>
		</div>
	);
};

export default ServerTimeDisplay;
