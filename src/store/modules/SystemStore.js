const SystemStore = {
	namespaced: true,
	state     : {
		errorPageData: {},
	},
	mutations: {
		setErrorMessage: (state, payload) => {
			state.error = {
				...state.error,
				content: payload,
			}
		},
	},
	actions: {
		setMessage: ({ commit }, { message }) => commit('setErrorMessage', message),
	},
	getters: {
		errorPageData: ({ errorPageData }) => errorPageData,
	},
}

export default SystemStore
