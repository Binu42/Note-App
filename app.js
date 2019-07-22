const yargs = require('yargs');
const notes = require('./note');

// Add Command
yargs.command({
    command: 'add',
    describe: 'Use this Command to add your notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },

    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }

    // It will work this way also
    // handler(argv){
    //     notes.addNotes(argv.title, argv.body);
    // }
});

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Use this Command to remove your notes',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
});

// List Command
yargs.command({
    command: 'list',
    describe: 'Use this Command to list your notes',
    handler(){
        notes.listNotes();
    }
});

// Read Command
yargs.command({
    command: 'read',
    describe: 'Use this Command to read your notes',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
});

yargs.parse();



