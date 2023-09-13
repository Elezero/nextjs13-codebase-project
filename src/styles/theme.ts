type Theme<T> = {
	colors: {
		primary: string
		secondary: string
		ternary: string

		success: string
		alert: string
		warning: string

		paraph: string
		title: string
		text: string
		label: string

		background0: string
		background1: string
		background2: string

		foreground0: string
		foreground1: string
		foreground2: string

		white: string
		black: string
		transparent: string

		extraColors?: T
	}
	values: {
		borderRadius0: number
		borderRadius1: number
		borderRadius2: number
	}
	sizes: {
		xxxs: number
		xxs: number
		xs: number
		s: number
		sm: number
		md: number
		lg: number
		xl: number
		xxl: number
		xxxl: number
	}
}

export const lightTheme: Theme<void> = {
	colors: {
		primary: '#0084ff',
		secondary: '#00ccff',
		ternary: '#00e0a8',

		success: '#00d300',
		alert: 'red',
		warning: '#ffd000',

		paraph: '#000000',
		title: '#000000',
		text: '#000000',
		label: '#000000',

		background0: '#ffffff',
		background1: '#cacaca',
		background2: '#979797',

		foreground0: '#000000',
		foreground1: '#363636',
		foreground2: '#666666',

		white: '#ffffff',
		black: '#000000',
		transparent: 'transparent',
	},
	values: {
		borderRadius0: 6,
		borderRadius1: 10,
		borderRadius2: 14,
	},
	sizes: {
		xxxs: 1,
		xxs: 2,
		xs: 4,
		s: 6,
		sm: 8,
		md: 10,
		lg: 14,
		xl: 18,
		xxl: 24,
		xxxl: 32,
	},
}

export const darkTheme: Theme<void> = {
	colors: {
		primary: '#0084ff',
		secondary: '#00ccff',
		ternary: '#00e0a8',

		success: '#00d300',
		alert: 'red',
		warning: '#ffd000',

		paraph: '#ffffff',
		title: '#ffffff',
		text: '#ffffff',
		label: '#ffffff',

		background0: '#080808',
		background1: '#414141',
		background2: '#5f5f5f',

		foreground0: '#f3f3f3',
		foreground1: '#d6d6d6',
		foreground2: '#b4b4b4',

		white: '#ffffff',
		black: '#000000',
		transparent: 'transparent',
	},
	values: {
		borderRadius0: 2,
		borderRadius1: 4,
		borderRadius2: 8,
	},
	sizes: {
		xxxs: 1,
		xxs: 2,
		xs: 4,
		s: 6,
		sm: 8,
		md: 10,
		lg: 14,
		xl: 18,
		xxl: 24,
		xxxl: 32,
	},
}

const theme = lightTheme

export default theme
