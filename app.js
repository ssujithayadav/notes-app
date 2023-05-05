
const chalk = require('chalk')
const yargs = require ('yargs')
const notes = require('./notes.js')

yargs.version('17.7.2')

//create add command

yargs.command({
    command: "add",
    describe:"add a new note",
    builder: {
                 title :{
                    describe: "Note title",
                    demandOption: true,
                    type: "string"
                 }
    },
    body: {
             describe: "Note body",
             demandOption: true,
             type: 'string'
    },
    handler:(argv)=>{
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command: "remove",
    describe:"remove a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
      notes.removeNotes(argv.title)
    }

})

yargs.command({
    command: "list",
    describe:"lists the  notes",
    handler:()=>{
        notes.listNotes()
    }

})
yargs.command({
    command: "read",
    describe:"reads a note",
    builder: {
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title)
    }

})

//add,remove,read,list


 yargs.parse()





