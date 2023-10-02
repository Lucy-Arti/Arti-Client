import axios from 'axios';

const baseURL = `http://lucy-arti.kro.kr:8080/`;

// export const postCode = (body: object) => {
// 	const data = axios
// 		.post(`http://lucy-arti.kro.kr:8080/auth/kakao/login`, body)
// 		.then((res) => console.log(res))
// 		.catch((err) => console.log(err));
// };

export const postCode = async (body: object) => {
	try {
		const response = await axios.post(`http://lucy-arti.kro.kr:8080/auth/kakao/login`, body);
		// console.log('인가코드 전송 및 전용 토큰 응답');
		console.log(response);
		// const accessToken = response.data.accessToken;
		// const refreshToken = response.data.refreshToken;

		// localStorage.setItem('access', accessToken);
		// localStorage.setItem('refresh', refreshToken);
		// return response.data;
	} catch (error) {
		console.error('🚨🚨에러 발생 에러 발생 🚨🚨', error);
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
				Authorization: `Bearer ${accessToken}`,
			},
		},
	);

	return response.data;
};

// export const getAuthAxios = (token: string | null) => {
// 	const authAxios = axios.create({
// 		baseURL: baseURL,
// 		headers: {
// 			Authorization: token,
// 		},
// 	});

// 	authAxios.interceptors.response.use(
// 		(res) => res,
// 		async (error) => {
// 			if (error.reponse.status === 401) {
// 				const { accessToken, refreshToken } = await getNewRefreshToken();
// 				error.config.headers.Authorization = accessToken;
// 				localStorage.setItem('access', accessToken);
// 				localStorage.setItem('refresh', refreshToken);
// 				return (await axios.get(error.config.url, error.config)).data;
// 			}
// 		},
// 	);
// 	return authAxios;
// };

// export const getProfile = async () => {
// 	const access = localStorage.getItem('access');
// 	const authAxios = getAuthAxios(access);
// 	const result = authAxios.get('/profile');
// 	return result.data;
// };
