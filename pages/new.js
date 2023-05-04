import QuillNoSSRWrapper from "@/components/Quill/QuillWrapper"
import modules from "@/components/Quill/Modules"
import formats from "@/components/Quill/Formats"
import { useState } from "react"
import { useRouter } from "next/router"

const New = (props) => {

    const router = useRouter()
    
    const [title, setTitle] = useState({
        "title": ""
    })

    const [text, setText] = useState({
        "text": ""
    })

    const handleTitleChange = (event) => {
        event.preventDefault()
        setTitle(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const requestObj = {
            title: title,
            text: text
        }

        await fetch("/api/note", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestObj)
        })

        router.push("/")
    }

    return <>
        <h1>Create Page</h1>
        <form onSubmit={handleSubmit}>
            <span>
                <input type="text" name="title" onChange={handleTitleChange} />
            </span>
            <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" onChange={setText} />
            <input type="submit" value="Create Note" />
        </form>
    </>
} 

export default New