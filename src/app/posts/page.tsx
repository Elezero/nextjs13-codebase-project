import PostCard from '@/src/components/PostCard'
import './Posts.css'
import MainBackendService from '@/src/api/backendService'

export type Post = {
	userId: number
	id: number
	title: string
	body: string
}

// async function loadPosts() {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// 	const data = await res.json()

// 	return data
// }

const PostsPage = async () => {
	const posts: Post[] = await MainBackendService.posts.LIST()
	return (
		<>
			<h1>Posts</h1>
			<div className="grid">
				{posts.map((post) => (
					<PostCard post={post} />
				))}
			</div>
		</>
	)
}

export default PostsPage
