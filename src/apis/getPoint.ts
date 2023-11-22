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

// 포인트 내역 불러오기
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

// 나의 초대코드 불러오기
export const getMyInviteCode = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/point/code`, {
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

// 친구초대 현황
export const getInviteFreindResult = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/point/invite`, {
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