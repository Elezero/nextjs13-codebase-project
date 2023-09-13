interface IService<T> {
	BASE_URL: string
	AUTH_TOKEN: string
	LIST: () => Promise<T[]>
	SINGLE: (id: string | number) => Promise<T>
	CREATE: (item: T) => Promise<T>
	UPDATE: (id: keyof T, item: T) => Promise<T>
	DELETE: (id: keyof T) => Promise<T>
}
