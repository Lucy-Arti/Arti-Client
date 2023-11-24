import axios from 'axios';
const baseURL = `https://arti-fashion.shop/`;

export const GetAllCmts = async (id: string) => {
    const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.get(`${baseURL}api/v2/comment/${id}`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PostBasicCmts = async(id: string, content:string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		"content":content
	};
	try {
		const response = await axios.post(`${baseURL}api/v2/comment/${id}`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PostReply = async(commentId: number, content:string) => {
	const accessToken = localStorage.getItem('access');
	const data = {
		"content":content
	};
	try {
		const response = await axios.post(`${baseURL}api/v2/comment/${commentId}/answer`, data, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const PutHeartOnCmt = async(id:number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.put(`${baseURL}api/v2/comment/${id}/like`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}

export const PostHeartOnReply = async(id:number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(`${baseURL}api/v2/comment/answer/${id}/like`, {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		// console.log(response.data);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
}