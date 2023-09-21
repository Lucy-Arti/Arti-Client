import axios from 'axios';

const baseURL = `https://lucy-arti.kro.kr/`;

export const postCode = async (body: object) => {
	try {
		const response = await axios.post(`${baseURL}/api/v1/oauth2/kakao/callback`, body);
		console.log('인가코드 전송 및 전용 토큰 응답');
		// window.location.href = '/';
		return response.data;
	} catch (error) {
		console.error('Error sending POST request:', error);
		throw error;
	}
};

const code: string | null = new URL(window.location.href).searchParams.get('code');

export const body: object = {
	body: code,
};

// export const kakaoLogin = async () => {
// 	window.location.href = '/';
// 	console.log(code);
// };

// export const getToken = async (code) => {
// 	const grant_type = 'authorization_code';
// 	const client_id = `${REST_API_KEY}`;

// 	const res = await axios.post(
// 		`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
// 		{
// 			headers: {
// 				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
// 			},
// 		},
// 	);

// 	const token = res.data.access_token;
// 	// ... 생략
// };
