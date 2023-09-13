import { NextResponse } from 'next/server'

interface UsersGetProps {
	params: {
		id: number
	}
}

export async function GET(request: Request, props: UsersGetProps) {
	console.log(`params |=========>`, JSON.stringify(props))

	const { searchParams } = await new URL(request.url)

	console.log(`searchParams |=========>`, JSON.stringify(searchParams))

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${props.params.id}`
	)
	const data = await res.json()
	return NextResponse.json(data)
}
export async function POST(request: Request) {
	return NextResponse.json('creating datos')
}
export async function PUT(request: Request) {
	return NextResponse.json('updating datos')
}
export async function DELETE(request: Request) {
	return NextResponse.json('deleting datos')
}
