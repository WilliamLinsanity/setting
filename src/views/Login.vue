<template>
	<div class="user-login">
		<div class="container">
			<div class="body">
				登入頁
			</div>
		</div>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Login',
	data() {
		return {
			errorMsg: '',
			form    : this.$form.createForm(this),
		}
	},
	computed: {
		...mapState('SystemStore', ['error']),
	},
	methods: {
		...mapActions('LoginStore', ['login']),
	},
}
</script>

<style lang="scss">
	@import "~@/styles/login";
</style>
