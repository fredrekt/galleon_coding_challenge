import axios from 'axios';

export const APP_API: string = process.env.NEXT_PUBLIC_API_URL || '';

axios.defaults.baseURL = `${APP_API}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		const res = error.response;
		const statusCode = res.status;
		const { config } = error;

		if (!config || !config.retry) {
			if (res) {
				console.log(res.data);
			} else {
				console.error(error);
			}
			console.log('status code: ', statusCode);
			return Promise.reject(error);
		}

		config.retry -= 1;
		const delayRetryRequest = new Promise<void>((resolve) => {
			setTimeout(() => {
				console.log('Retrying the request', config.url);
				resolve();
			}, config.retryDelay || 2000);
		});
		return delayRetryRequest.then(() => axios(config));
	}
);
