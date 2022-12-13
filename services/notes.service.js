import uuid from 'uuid/dist/v4'

export class NotesService {

    constructor(data){
        this.notes = data
    }

    setData(data) {
        this.notes = data
    }

    /**
     * Gets up-to-date list of notes
     */
    async getNotes(){
        return this.notes
    }

    update(updateCallback){
        const clone = [...this.notes]
        updateCallback(clone)
        this.notes = clone
    }

    /**
     * Saves note if it has id, adds new one with new id otherwise
     * @param note 
     */
    async saveNote(note){
        const index = this.notes.findIndex(({ id }) => note.id === id )
        if (index === -1) {
            note.id = uuid()
            this.update(notes => notes.push(note))
        } else {
            this.update(notes => notes.splice(index, 1, note))
        }

        return note
    }
}

const notes = require('../data/notes.json')

export const notesService = new NotesService(notes)
