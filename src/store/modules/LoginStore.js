import Vuex from 'vuex'
import Vue from 'vue'
import LoginAPIUtil from '@/api/utils/LoginAPIUtil'

Vue.use(Vuex)
const LoginStore = {
	namespaced: true,
	state     : {
		user : {},
		token: '',
		id   : 0,
		title: '',
	},
	mutations: {
		login: (state, data) => {
			localStorage.token = data.token
			localStorage.name = data.name
			localStorage.id = data.id
			state.token = data.token
			state.user = data.name
			state.id = data.id
		},
		logout: (state) => {
			localStorage.removeItem('token')
			localStorage.removeItem('name')
			localStorage.removeItem('id')
			state.token = null
			window.location.reload()
		},
	},
	actions: {
		login: ({ commit }, { data }) => new Promise((resolve, reject) => {
			LoginAPIUtil.login(
				data,
			)
				.then((response) => {
					commit('login', response.data)
					resolve(response)
				}).catch((error) => {
					reject(error)
				})
		}),
		logout: ({ commit }) => {
			commit('logout')
		},
	},
	getters: {
		token  : ({ token }) => token,
		isLogin: ({ token }) => token && localStorage.getItem('token'),
	},
}
export default LoginStore
