const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => notes.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title!== title;
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found!'))
    }
   //filter method used here to remove note
}

const listNotes = (notes)=>{
     notes = loadNotes()
    console.log(chalk.green("Your Notes:"))
    notes.forEach(notes => {
        console.log(notes.title)
    })

}
   const readNote = (title) =>{
        const notes = loadNotes()
        const note = notes.find((note)=> note.title === title)

        if(note){
            console.log(chalk.inverse(note.title))
            console.log(note.body)
        }else{
            console.log(chalk.red.inverse('Note not found!'))
        }

   }

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNote : readNote
}