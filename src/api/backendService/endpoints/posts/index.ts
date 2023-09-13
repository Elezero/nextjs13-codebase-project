import Post from './interfaces/Post'

export const PostsService: IService<Post> = {
	BASE_URL: process.env.POSTS_BASE_URL ?? 'no-url-configured',
	AUTH_TOKEN: '',

	LIST: async () => {
		const res = await fetch(PostsService.BASE_URL + '/posts', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + PostsService.AUTH_TOKEN,
			},
		})
		const data: Post[] = await res.json()

		return data
	},
	SINGLE: async (id: any) => {
		const res = await fetch(PostsService.BASE_URL + '/posts/' + id, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + PostsService.AUTH_TOKEN,
			},
		})
		const data = await res.json()

		return data
	},
	CREATE: async (item: any) => {
		const res = await fetch(PostsService.BASE_URL + '/posts', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + PostsService.AUTH_TOKEN,
			},
			body: {
				...item,
			},
		})
		const data = await res.json()

		return data
	},
	UPDATE: async (id: any, item: any) => {
		const res = await fetch(PostsService.BASE_URL + '/posts' + id, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + PostsService.AUTH_TOKEN,
			},
			body: {
				...item,
			},
		})
		const data = await res.json()

		return data
	},
	DELETE: async (id: any) => {
		const res = await fetch(PostsService.BASE_URL + '/posts' + id, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + PostsService.AUTH_TOKEN,
			},
		})

		const data = await res.json()

		return data
	},
}
