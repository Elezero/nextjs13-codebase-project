import Link from 'next/link'
import './Navbar.css'

export default function NavBar() {
	return (
		<nav className="navbar py-5 px-5">
			<Link href="/">
				<h3 className="text-3xl font-bold">My Next App</h3>
			</Link>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/posts">Posts</Link>
				</li>
			</ul>
		</nav>
	)
}
