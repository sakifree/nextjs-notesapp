import { connection } from "../connection"

const noteSchema = new connection.Schema({
    title: String,
    text: String
}, {timestamps: true})

export const Note = connection.models.Note || connection.model("Note", noteSchema)