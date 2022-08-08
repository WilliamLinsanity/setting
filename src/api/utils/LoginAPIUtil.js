import API_DAO  from '@/api/dao'
import API_URLS from '@/api/urls'

export default {
	login: (data) => API_DAO.post({ url: `${API_URLS.LOGIN}`, data }),
}
