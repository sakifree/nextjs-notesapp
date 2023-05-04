import { getNote } from "@/utils/actions"
import { useState } from "react"

const Show = ({note}) => {
    console.log(note)

    return <>
        <h1>Show Page</h1>
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