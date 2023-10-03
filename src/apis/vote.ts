import axios, { AxiosError } from 'axios';

const baseURL = 'http://lucy-arti.kro.kr:8080/';

interface VoteData {
	fourth: number[];
	second: number;
	first: number;
}

// 투표로 올라간 리스트 전달
export const postMatchList = async (body: VoteData) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}api/v1/votes`, body, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		console.log('투표 결과 업데이트', response.data);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
				const statusCode = axiosError.response.status;
				const errorMessage =
					statusCode === 500
						? '로그인 필요'
						: statusCode === 400
						? '이미 투표완료 혹은 body 없음'
						: `서버 응답 에러 - 상태 코드: ${statusCode}`;
				console.error(errorMessage, axiosError.response.data);
			} else {
				console.error('네트워크 에러', error.message);
			}
		} else {
			console.error('알 수 없는 에러', error);
		}
		throw error;
	}
};
