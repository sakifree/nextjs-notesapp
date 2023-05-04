import QuillNoSSRWrapper from "@/components/QuillWrapper"

const New = (props) => {

    const modules = {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['clean'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
      }
      /*
       * Quill editor formats
       * See https://quilljs.com/docs/formats/
       */
      const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
      ]

    return <>
        <h1>Create Page</h1>
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />
    </>
} 

export default New