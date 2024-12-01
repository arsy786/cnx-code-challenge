import "./App.css";
import MetricsDisplay from "./components/MetricsDisplay";
import TimeDisplay from "./components/TimeDisplay";

function App() {
	return (
		<div className="app-container">
			<div className="left-section">
				<TimeDisplay />
			</div>
			<div className="right-section">
				<MetricsDisplay />
			</div>
		</div>
	);
}

export default App;
