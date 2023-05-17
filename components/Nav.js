import Link from "next/link"

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    <Link href="/new">ADD NOTE</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav