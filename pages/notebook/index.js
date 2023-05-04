import { getNotes } from "@/utils/actions"
import Link from "next/link"

const Index = (props) => {
    return <>
        <h1>Index Page</h1>
    </>
}

export default Index

export async function getServerSideProps(context){
    const notes = JSON.parse(JSON.stringify(await getNotes()))
    console.log(notes)

    return {
        props: {
            notes
        }
    }
}