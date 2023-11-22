import axios from 'axios';

const baseURL = `https://arti-fashion.shop/`;

// 가능한 포인트 모으기 리스트 불러오기
export const getPossibleMissionList = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/point`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
        console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 포인트 내역
export const getPointHistory = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/point/history`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
        console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};