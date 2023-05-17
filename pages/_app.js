import "react-quill/dist/quill.snow.css"
import Head from "next/head"
import Nav from "@/components/Nav"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Notes App</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
