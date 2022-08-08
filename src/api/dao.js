import axios       from 'axios'
import queryString from 'query-string'
import helper      from './helper'

const instance                 = axios.create({
	baseURL: `${window.location.origin}/v1`,
})
axios.defaults.withCredentials = true
instance.interceptors.request.use(
	(config) => config,
	(err) => Promise.reject(err),
)

// http response 拦截器
instance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			const { status, data } = error.response
			return Promise.reject(helper.error(status, data))
		}
		return Promise.reject(error.response.data)
	},
)

const API_DAO = {
	get : ({ url, query = '' }) => instance.get(`${url}${query ? `?${queryString.stringify(query, { arrayFormat: 'bracket' })}` : ''}`),
	post: ({ url, data, query = '' }) => instance.post(`${url}${query ? `?${queryString.stringify(query, { arrayFormat: 'bracket' })}` : ''}`, data),
	put : ({ url, data, query = '' }) => instance.put(`${url}${query ? `?${queryString.stringify(query, { arrayFormat: 'bracket' })}` : ''}`, data),
	del : ({ url, data = {}, query = '' }) => instance.delete(`${url}${query ? `?${queryString.stringify(query, { arrayFormat: 'bracket' })}` : ''}`, { data }),
}

export default API_DAO
