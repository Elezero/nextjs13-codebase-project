import PostCard from '@/src/components/PostCard'
import PostsPage from '../page'
import { Suspense } from 'react'
import MainBackendService from '@/src/api/backendService'

interface PostPageProps {
	params: { id: number }
	searchParams: Record<string, string | undefined>
}

// async function loadPost(id: number) {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
// 	const data = await res.json()
// 	return data
// }

export default async function PostPage(props: PostPageProps) {
	console.log(`props |=========>`, JSON.stringify(props))

	const post = await MainBackendService.posts.SINGLE(props.params.id) //loadPost(props.params.id)
	return (
		<>
			<PostCard post={post} />
			<hr />
			<h2>Other posts</h2>
			<Suspense fallback={<h2>Loading</h2>}>
				<PostsPage />
			</Suspense>
		</>
	)
}
