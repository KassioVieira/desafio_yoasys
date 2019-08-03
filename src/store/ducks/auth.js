const initialState = {
	isLoggedIn: false,
	user: [],
	headers: [],
}

const Types = {
	SET_USER: 'user/SET_USER',
	SET_LOGGED: 'user/SET_LOGGED',
	SET_HEADERS: 'user/SET_HEADERS',
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Types.SET_USER:
			return {
				...state,
				user: payload.user
			}
		case Types.SET_HEADERS:
			return {
				...state,
				headers: payload.headers
		}
		case Types.SET_LOGGED:
			return {
				...state,
				isLoggedIn: payload.logged
			}
		default:
			return state
	}
}

export const setUser = user => {
	return {
		type: Types.SET_USER,
		payload: {
			user: user
		}
	}
}

export const setHeaders = headers => {
	return {
		type: Types.SET_HEADERS,
		payload: {
			headers: headers
		}
	}
}

export const setLogged = logged => {
	return {
		type: Types.SET_LOGGED,
		payload: {
			logged: logged
		}
	}
}
