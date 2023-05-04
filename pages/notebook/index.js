import { getNotes } from "@/utils/actions"
import Link from "next/link"

const Index = ({notes}) => {
    return (
        <>
            <h1>Index Page</h1>
            <div>
                {notes.map((note) => (
                    <div key={note._id}>
                        <Link href={`/notebook/${encodeURIComponent(note._id)}`}>
                            <h2>{note.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps(context){
    const notes = JSON.parse(JSON.stringify(await getNotes()))
    //console.log(notes)

    return {
        props: {
            notes
        }
    }
}

export default Index