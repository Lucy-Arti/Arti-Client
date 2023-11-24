import { postCodeBody } from '@/types/request';
import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

// export const postCode = (body: object) => {
// 	const data = axios
// 		.post(`http://lucy-arti.kro.kr:8080/auth/kakao/login`, body)
// 		.then((res) => console.log(res))
// 		.catch((err) => console.log(err));
// };

export const postCode = async (body: postCodeBody) => {
	try {
		const response = await axios.post(`${baseURL}api/v1/kakao/login`, body);
		console.log('인가코드 전송 및 전용 토큰 응답');
		const accessToken = response.data.accessToken;
		const refreshToken = response.data.refreshToken;

		localStorage.setItem('access', accessToken);
		localStorage.setItem('refresh', refreshToken);
	} catch (error) {
		console.error('🚨🚨에러 발생 에러 발생 🚨🚨', error);
		throw error;
	}
};

export const getUserInfo = async () => {
	const accessToken = localStorage.getItem('access');

	try {
		const response = await axios.get(
			`${baseURL}api/v1/kakao/info`,

			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		console.log('사용자 정보 저장 완료');

		return response.data;
	} catch (error) {
		throw error;
	}
};

export const logout = async () => {
	const accessToken = localStorage.getItem('access');

	try {
		const result = await axios.post(`${baseURL}api/v1/kakao/logout`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});

		return result.data;
	} catch (error) {
		console.error('🚨🚨에러 발생 에러 발생 🚨🚨', error);
		throw error;
	}
};

// export const getNewRefreshToken = async () => {
// 	const accessToken = localStorage.getItem('access');
// 	const refreshToken = localStorage.getItem('refresh');

// 	const response = await axios.post(
// 		`${baseURL}/newRefresh`,
// 		{
// 			refreshToken,
// 		},
// 		{
// 			headers: {
// 				Authorization: `Bearer ${accessToken}`,
// 			},
// 		},
// 	);

// 	return response.data;
// };

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
