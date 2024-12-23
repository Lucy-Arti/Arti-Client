import axios, { AxiosError } from 'axios';
const baseURL = `https://arti-fashion.o-r.kr/`;

export const GetAllCmts = async (id: string) => {
	const accessToken = localStorage.getItem('access');
	try {
		if (accessToken) {
			const response = await axios.get(`${baseURL}api/v2/comment/${id}`, {
				headers: { Authorization: `Bearer ${accessToken}` },
			});
			return response;
		} else {
			const response = await axios.get(`${baseURL}api/v2/comment/${id}`);
			return response;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PostBasicCmts = async (id: string, content: string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		content: content,
	};
	try {
		const response = await axios.post(`${baseURL}api/v2/comment/${id}`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PostReply = async (commentId: number, content: string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		content: content,
	};
	try {
		const response = await axios.post(`${baseURL}api/v2/comment/${commentId}/answer`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PutHeartOnCmt = async (id: number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.put(
			`${baseURL}api/v2/comment/${id}/like`,
			{},
			{
				headers: { Authorization: `Bearer ${accessToken}` },
			},
		);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
				const axiosMessage = axiosError.response.data;
				console.error(axiosMessage, axiosError.response.status);
			} else {
				console.error('네트워크 에러', error.message);
			}
		} else {
			console.error('알 수 없는 에러', error);
		}
		throw error;
	}
};

export const PostHeartOnReply = async (id: number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.put(
			`${baseURL}api/v2/comment/answer/${id}/like`,
			{},
			{
				headers: { Authorization: `Bearer ${accessToken}` },
			},
		);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const axiosError = error as AxiosError;
			if (axiosError.response) {
				const axiosMessage = axiosError.response.data;
				console.error(axiosMessage, axiosError.response.status);
			} else {
				console.error('네트워크 에러', error.message);
			}
		} else {
			console.error('알 수 없는 에러', error);
		}
		throw error;
	}
};

export const editCmt = async (commentId: number, content: string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		content: content,
	};
	try {
		const response = await axios.put(`${baseURL}api/v2/comment/${commentId}`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const editReply = async (answerId: number, content: string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		content: content,
	};
	try {
		const response = await axios.put(`${baseURL}api/v2/comment/answer/${answerId}`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
