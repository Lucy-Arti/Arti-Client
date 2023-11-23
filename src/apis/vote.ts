import axios, { AxiosError } from 'axios';

const baseURL = 'https://arti-fashion.shop/';

interface VoteData {
	fourth: number[];
	second: number;
	first: number;
}

// 투표 가능 여부 확인
export const getIsVotePossible = async () => {
	const accessToken = localStorage.getItem('access');

	try {
		const response = await axios.get(`${baseURL}api/v1/votes/possible`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
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

// 라운드 8강 옷 불러오기
export const getVoteDataList = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v1/votes`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		console.log('대진 옷 불러오기 성공', response);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
				const statusCode = axiosError.response.status;
				if (statusCode === 500) {
					console.error('로그인하지 않은 사용자');
				} else {
					console.error('서버 응답 에러 - 상태 코드:', statusCode, axiosError.response.data);
				}
			} else {
				console.error('네트워크 에러', error.message);
			}
		} else {
			console.error('알 수 없는 에러', error);
		}
		throw error;
	}
};

// 투표 결과 전달
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

// 점수 정렬

export const getTotalScoreList = async () => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/score`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
