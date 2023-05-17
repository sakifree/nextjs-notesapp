import Link from "next/link"

const Nav = (props) => {
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/new">ADD NOTE</Link>
            </li>
        </ul>
    </nav>
}

export default Nav