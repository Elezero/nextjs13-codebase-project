import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<section>
			<h1>404</h1>
			<p>Not found</p>
			<Link href={'/'}>Go Home</Link>
		</section>
	)
}
