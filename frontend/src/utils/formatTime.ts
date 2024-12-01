export const formatTimeDifference = (differenceInSeconds: number): string => {
	const hours = Math.floor(differenceInSeconds / 3600)
		.toString()
		.padStart(2, "0");
	const minutes = Math.floor((differenceInSeconds % 3600) / 60)
		.toString()
		.padStart(2, "0");
	const seconds = Math.floor(differenceInSeconds % 60)
		.toString()
		.padStart(2, "0");

	return `${hours}:${minutes}:${seconds}`;
};
