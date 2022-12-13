<template>
  <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Vuejs Notes</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <NotesList :notes="notes"
                           :selected="selected"
                />
            </div>
            
            <div class="col-md-8">
                <NoteForm v-if="selected"/>
                <div v-else>
                    <button id="new-note">New Note</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

import {notesService} from '../services/notes.service.js'

export default {
    name: 'App',
    components: {
        NoteForm,
        NotesList
    },
    data() {
        return {
            notes: [],
            selected: null,
            service: notesService
        }
    },
    methods: {
        newNote() {
            // TO-DO: Select new empty note
        },
        onSelect() {
            // TO-DO: Set note as selected
        },
        onSubmit() {
            // TO-DO: Save note to service
        },
        onCancel() {
            // TO-DO: Unselect note
        }
    }
}
</script>
