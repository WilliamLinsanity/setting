<template>
	<div class="errorPage">
		<div v-if="404">
			404 error
		</div>
	</div>
</template>
<style lang="scss">
	.errorPage {
		align-items     : center;
		display         : flex;
		flex-direction  : column;
		flex-wrap       : wrap;
		justify-content : center;
		width           : 100%;
	}
</style>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	name    : 'ErrorPage',
	computed: {
		...mapGetters('SystemStore', ['errorPageData']),
		nowStatus() {
			const { status } = this.errorPageData
			if (!Object.keys(this.errorPageData).length) return 404
			return status
		},
	},
	methods: {
		...mapMutations('SystemStore', ['setErrorPageData']),
	},
	beforeDestroy() {
		this.setErrorPageData({})
	},
}
</script>
