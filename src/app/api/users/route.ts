import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	console.log(
		`process.env.TOKEN |=========>`,
		JSON.stringify(process.env.TOKEN)
	)

	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	return NextResponse.json(data)
}
export async function POST(request: Request) {
	const { name, lastname } = await request.json()

	console.log(`name |=========>`, JSON.stringify(name))
	console.log(`lastname |=========>`, JSON.stringify(lastname))
	return NextResponse.json('creating datos')
}
export async function PUT(request: Request) {
	return NextResponse.json('updating datos')
}
export async function DELETE(request: Request) {
	return NextResponse.json('deleting datos')
}
