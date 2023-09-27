import axios from 'axios';

const baseURL = `https://lucy-arti.kro.kr/`;

export const postCode = async () => {
	const code: string | null = new URL(window.location.href).searchParams.get('code');
	const body: object = {
		authCode: code,
	};

	try {
		const response = await axios.post(`${baseURL}/api/v1/oauth2/kakao/callback`, body);
		console.log('인가코드 전송 및 전용 토큰 응답');
		const accessToken = response.data.accessToken;
		const refreshToken = response.data.refreshToken;

		localStorage.setItem('access', accessToken);
		localStorage.setItem('refresh', refreshToken);
		// window.location.href = '/';
		return response;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
};

export const getNewRefreshToken = async () => {
	const accessToken = localStorage.getItem('access');
	const refreshToken = localStorage.getItem('refresh');

	const response = await axios.post(
		`${baseURL}/newRefresh`,
		{
			refreshToken,
		},
		{
			headers: {
				Authorization: accessToken,
			},
		},
	);

	return response.data;
};

export const getAuthAxios = (token: string) => {
	const authAxios = axios.create({
		baseURL: baseURL,
		headers: {
			Authorization: token,
		},
	});

	authAxios.interceptors.response.use(
		(res) => res,
		async (error) => {
			if (error.reponse.status === 401) {
				const { accessToken, refreshToken } = await getNewRefreshToken();
				error.config.headers.Authorization = accessToken;
				localStorage.setItem('access', accessToken);
				localStorage.setItem('refresh', refreshToken);
				return (await axios.get(error.config.url, error.config)).data;
			}
		},
	);
	return authAxios;
};
