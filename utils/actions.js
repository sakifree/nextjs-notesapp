import { Note } from "./models/noteSchema";

// get all notes
export const getNotes = async () => await Note.find({})

// get a single note
export const getNote = async (id) => await Note.findById(id)

// create a new note
export const createNote = async (newNote) => await Note.create(newNote)

// update a note
export const updateNote = async (id, updatedNote) => await Note.findByIdAndUpdate(id, updatedNote, {new: true})

// delete a note
export const destroyNote = async (id) => await Note.findByIdAndDelete(id)