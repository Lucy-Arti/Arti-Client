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