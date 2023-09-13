'use client'
import { Post } from '@/src/app/posts/page'
import Link from 'next/link'
import theme from '../styles/theme'

interface PostCardProps {
	post: Post
}
export default function PostCard(props: PostCardProps) {
	return (
		<div
			key={props.post.id}
			className="p-10"
			style={{ backgroundColor: theme.colors.foreground0 }}
		>
			<Link href={`/posts/${props.post.id}`}>
				<h3 className="text-xl font-bold mb-4">
					{props.post.id} . {props.post.title}
				</h3>
			</Link>
			<p style={{ color: theme.colors.background1 }}>{props.post.body}</p>
			<button
				onClick={() => {}}
				style={{
					backgroundColor: theme.colors.primary,
					padding: theme.sizes.md,
					borderRadius: theme.values.borderRadius0,
				}}
			>
				Button
			</button>
		</div>
	)
}
