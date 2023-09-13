import Post from '../posts/interfaces/Post'

export const UsersService: IService<any> = {
	BASE_URL: process.env.USERS_BASE_URL ?? 'no-url-configured',
	AUTH_TOKEN: '',
	LIST: async () => {
		const res = await fetch(UsersService.BASE_URL + '/users', {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + UsersService.AUTH_TOKEN,
			},
		})
		const data: any[] = await res.json()

		return data
	},
	SINGLE: async (id: any) => {
		const res = await fetch(UsersService.BASE_URL + '/users/' + id, {
			method: 'GET',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + UsersService.AUTH_TOKEN,
			},
		})
		const data = await res.json()

		return data
	},
	CREATE: async (item: any) => {
		const res = await fetch(UsersService.BASE_URL + '/users', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + UsersService.AUTH_TOKEN,
			},
			body: {
				...item,
			},
		})
		const data = await res.json()

		return data
	},
	UPDATE: async (id: any, item: any) => {
		const res = await fetch(UsersService.BASE_URL + '/users' + id, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + UsersService.AUTH_TOKEN,
			},
			body: {
				...item,
			},
		})
		const data = await res.json()

		return data
	},
	DELETE: async (id: any) => {
		const res = await fetch(UsersService.BASE_URL + '/users' + id, {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json',
				Authorization: 'Bearer ' + UsersService.AUTH_TOKEN,
			},
		})

		const data = await res.json()

		return data
	},
}
