import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
	return (
		<div className="d-flex flex-column vh-100">
			<Navbar />
			<div className="d-flex flex-column flex-fill bg-secondary">
				<Notes />
			</div>
		</div>
	);
}
export default App;
