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
		const accessToken = response.data.accessToekn;
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
