import axios, { AxiosError, AxiosRequestConfig, AxiosResponseHeaders } from 'axios';
const baseURL = `https://arti-fashion.shop/`;

export const GetVotedProductLists = async (token: string | null) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/members/1st`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetMarkedProductLists = async (token: string | null) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/members/mine`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetRecentProductLists = async (token: string | null) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/recent`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export type ChangeNickNameError = {
	errorCode: number;
	message: string;
};

export const EditNickname = async (name: string) => {
	const accessToken = localStorage.getItem('access');
	const data = new FormData();
	data.append('customName', name);

	try {
		const response = await axios.post(`${baseURL}api/v1/members/profile/name`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data;
	} catch (error) {
		if (axios.isAxiosError<ChangeNickNameError, any>(error)) {
			const axiosError = error as AxiosError<ChangeNickNameError, any>;
			if (axiosError.response) {
				const statusCode = axiosError.response.data.errorCode;
				if (statusCode === 1002) {
					return statusCode;
				} else if (statusCode === 1003) {
					return statusCode;
				}
				console.error(statusCode, axiosError.response.data.errorCode);
			} else {
				console.error('네트워크 에러', error.message);
				return false;
			}
		} else {
			console.error('알 수 없는 에러', error);
			return false;
		}
		throw error;
	}
};

export const EditProfileImg = async (data: FormData) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}api/v1/members/profile/picture`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data;
	} catch (error) {
		return false;
	}
};

export const CanInvite = async () => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/point/invited`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response;
	} catch (error) {
		return false;
	}
};

export const PostInviteCode = async (inviteCode: string) => {
	const data = {
		code: inviteCode,
	};
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}api/v2/point/invited`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response.data;
	} catch (error) {
		return false;
	}
};
