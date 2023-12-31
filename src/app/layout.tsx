import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavBar from '../components/Navbar'
import { Roboto } from 'next/font/google'

const robotoFont = Roboto({
	weight: ['300', '400', '500'],
	style: ['italic', 'normal'],
	subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'My Next app',
	description: 'Generated by create next app',
	keywords: ['asd', 'as'],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={[inter.className, robotoFont.className].join(' ')}>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
