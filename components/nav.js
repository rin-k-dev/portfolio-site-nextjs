import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="#service">Service</Link>
                </li>
                <li>
                    <Link href="/works">Works</Link>
                </li>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}