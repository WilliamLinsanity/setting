<template>
	<div id="app">
		<component :is="component" />
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			components: {
				login    : () => import('@/views/Login'),
				errorPage: () => import('@/views/ErrorPage'),
			},
			component: '',
		}
	},
	watch: {
		errorPageData(newError) {
			this.isReady = false
			if (Object.keys(newError).length) {
				this.component = this.components.errorPage
				this.isReady = true
			}
		},
	},
	computed: {
		...mapGetters('SystemStore', ['errorPageData']),
	},
	created() {
		 this.component = this.components.login
	},
}
</script>
<style>
</style>
