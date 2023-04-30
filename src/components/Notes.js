import { useState } from "react";
import Note from "./Note";

function Notes() {
	const [notes, setNotes] = useState([]);
	const [note, setNote] = useState("");
	const handleNoteInput = (e) => {
		const currentNote = e.target.value;
		setNote(currentNote);
	};
	const handleNoteAdd = (e) => {
		e.preventDefault();
		const noteAdd = note.trim();
		if (noteAdd.length > 0) {
			const newNotes = [...notes];
			newNotes.push(noteAdd);
			setNotes(newNotes);
			setNote("");
		}
	};
	return (
		<div className="d-flex flex-fill flex-column align-items-center">
			<div className="card m-1 shadow w-50 mt-2">
				<div className="card-header">Add Notes</div>
				<form onSubmit={handleNoteAdd}>
					<div className="d-flex card-body">
						<input
							className="form-control"
							placeholder="Enter note text"
							value={note}
							onChange={handleNoteInput}
						/>
						<button className="btn btn-success ms-2">Add</button>
					</div>
				</form>
			</div>
			<div className="card m-1 shadow w-50">
				<div className="card-header">My Notes</div>
				<div className="d-flex flex-column card-body">
					{notes.map((item, index) => (
						<Note text={item} key={index} />
					))}
				</div>
			</div>
		</div>
	);
}
export default Notes;
