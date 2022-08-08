import Vue       from 'vue'
import VueRouter from 'vue-router'
import store     from '@/store'

Vue.use(VueRouter)

const ROUTER_CONSTANTS = [
	{
		path     : 'login',
		name     : 'Login',
		redirect : '/',
		component: () => import('@/views/Login'),
	},
]

export const routes = () => [
	ROUTER_CONSTANTS,
	{
		path     : '*',
		component: () => import('@/views/ErrorPage'),
		name     : 'ErrorPage',
	},
]

export default new VueRouter({
	mode  : 'history',
	base  : process.env.BASE_URL,
	routes: [],
})
if (localStorage.getItem('token')) {
	store.commit('LoginStore/login', {
		token: localStorage.getItem('token'),
		name : localStorage.getItem('name'),
		id   : localStorage.getItem('id'),
	})
}
