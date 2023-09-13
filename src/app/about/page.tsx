'use client'

import ClientComponent from '@/src/components/ClientComponent'
import { Metadata } from 'next'
import { useRouter } from 'next/navigation'

export const metadata: Metadata = {
	title: 'About',
	description: 'The about page',
}

const AboutPage = () => {
	const router = useRouter()
	return (
		<section>
			<h1>About</h1>
			<ClientComponent />
			<button
				className="bg-sky-700 p-2 rounded-md"
				onClick={() => {
					router.push('/')
				}}
			>
				Click
			</button>
		</section>
	)
}

export default AboutPage
