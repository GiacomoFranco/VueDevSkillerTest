This task evaluates the candidate's skills in `Vue.js`.

# Vue Notes App Task

Notes application provides a simple list of notes.

## Setup

Follow these steps for correct application setup :

1. `npm install` – install dependencies
2. `npm test` – run all tests (should fail unless you fix the app)
3. `npm serve` – serve the app at [http://localhost:8080/](http://localhost:8080/) (it automatically opens the app in your default browser)

----

## Your Task

Your task is to complete simple notes application using provided `NotesService` to retrieve and update notes. The goal is to have all tests pass.

## Requirements

- Notes application should provide a simple list of notes where each note contains `id`, `title` and `text` attributes.
- Notes application should let the user make a new note or to update an existing one.
- When a new note button is clicked, an empty form should be given to the user that will append a new note to the array of existing notes.
- When an existing note is selected, the user has options to:
  - save - which will update the selected note with new `title` and `text`
  - cancel - which will deselect the note
- When there are no notes selected, `New Note` button should be displayed to the user as an option.

### 1. App and NotesService

- `NotesService` imported inside `App` component should be used
- When a form is submitted, async `saveNote` method should be called on service with the updated note
- When `App` is created, async `getNotes` method should be called on service and the appropriate component show notes as a list
- When a new note is added, it should be displayed on the list
- *New Note* button should be displayed if no notes are currently selected
- *New Note* on click should call `newNote` method that puts an empty note object as a selected one
- When an existing note is saved, it should be updated on the list

### 2. Note Form

- Use the `note` prop for data
- When the selected note is provided via `note` prop, title and note input fields should be populated
- When *Cancel* is clicked, tbe selected note should be reset
- When any field value changes, it should call `onChange` handler with tbe updated note that will update the selected object appropriately
- When the form is submitted, it should call `onSubmit` with updated note
- `onSubmit` inside `App` will then use the appropriate service method and update the state accordingly

### 3. Use `NotesServices` to populate the list of notes

- Each item in the list should show a note title
- List component should notify its parent on item click with `onSelect` handler
- When note component gets passed a note via `selected` prop, it should add `active` class to the correct list item

**Good Luck!**

