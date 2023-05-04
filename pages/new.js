import QuillNoSSRWrapper from "@/components/Quill/QuillWrapper"
import modules from "@/components/Quill/Modules"
import formats from "@/components/Quill/Formats"

const New = (props) => {

    


    return <>
        <h1>Create Page</h1>
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
    </>
} 

export default New