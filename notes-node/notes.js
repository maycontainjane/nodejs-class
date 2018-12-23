const fs = require('fs');

var logNote = (note) => {
	// break and use repl to output note
	// use read command with title
	debugger;
	console.log("---");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch (e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));	

};

var addNote = (title, body) => {
	console.log('Adding note', title, body);
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	// fetch notes
	notes = fetchNotes();
	// filter notes
	gotNote = notes.filter((note) => note.title === title);
	// check if note is found and if so return
	// else return undefined
	return gotNote[0];
}

var removeNote = (title) => {
	// fetch notes
	notes = fetchNotes();
	// filter notes
	filteredNotes = notes.filter((note) => note.title !== title);
	if (filteredNotes.length === notes.length) {
		return false;
	}
	// save new notes array
	else {
		saveNotes(filteredNotes);
		return true;
	}
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};