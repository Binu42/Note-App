const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your Notes ....';
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNotes = notes.find((note) => note.title === title);

    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bgGreen.black('Notes Saved SuccessFully...'));
    } else {
        console.log(chalk.bgRed('Notes Already Taken...'));
    }
}

const removeNotes = (title) => {
    var notes = loadNotes();
    const note = notes.filter((note) => note.title !== title);
    if (note.length === notes.length) {
        console.log(chalk.bgRed('No Notes Found with Title:- ' + title + ' to Remove'));
    } else {
        console.log(chalk.bgGreen.black('Notes Removed with Title:- ' + title));
        saveNotes(note);
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
    try {
        const notes = fs.readFileSync('notes.json').toString();
        const notesScript = JSON.parse(notes);
        return notesScript;
    } catch (error) {
        return [];
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(getNotes());
    notes.forEach(note => {
        console.log(chalk.yellow.inverse(note.title));
    });
}

const readNotes = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Note Not found with title:- ' + title));
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}