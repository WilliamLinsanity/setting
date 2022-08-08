import store  from '@/store/index'
import router from '@/routes'

const helper = {
	error: (status, response) => {
		const { code } = response
		switch (parseInt(code)) {
			// 自定義錯誤碼
			case 401001:
				router.push({ name: 'ErrorPage' })
				break
			case 400098:
				router.push({ name: 'ErrorPage' })
				break
			default:
				store.dispatch('SystemStore/setMessage', response)
				break
		}
		return response
	},
}
export default helper
