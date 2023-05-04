import { getNote } from "@/utils/actions"
import { useRouter } from "next/router"
import { useState } from "react"
import QuillNoSSRWrapper from "@/components/Quill/QuillWrapper"

const Show = ({note}) => {
    console.log(note)

    const router = useRouter()

    return <>
        <h1>Show Page</h1>
        <h1>{note.title}</h1>
        <QuillNoSSRWrapper value={note.text} readOnly={true} theme="bubble" />
    </>
}


export async function getServerSideProps(context){
    const id = context.query.id
    const note = JSON.parse(JSON.stringify(await getNote(id)))

    return {
        props: {
            note
        }
    }
}

export default Show