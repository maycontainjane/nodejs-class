const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOpt = {
  	describe: 'Title of note',
  	demand: true,
  	alias: 't'
};

var bodyOpt = {
  	describe: 'Body of note',
  	demand: true,
  	alias: 'b'
};

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOpt,
  body: bodyOpt
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
	title: titleOpt
})
.command('remove', 'Remove a note', {
	title: titleOpt
})
.help()
.argv;
var command = process.argv[2];

if (command == 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log("Your note was saved.");
		notes.logNote(note);
	}
	else {
		console.log("Title already in use. Please specify unique title.")
	}
} 
else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read') {
	note = notes.getNote(argv.title);
	if (note) {
		notes.logNote(note);
	}
	else {
		console.log("Note with title", argv.title, "not found.");
	}
}
else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
}
else {
	console.log('Command not recognized.');
}