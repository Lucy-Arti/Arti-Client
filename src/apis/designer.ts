import axios from 'axios';
const baseURL = `http://arti-fashion.o-r.kr:8080/`;

export const GetDesignerProduct = async (idx: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/clothes/designer/${idx}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const GetDesignerDetail = async (id: string) => {
	try {
		const response = await axios.get(`${baseURL}api/v1/designers/${id}`);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};
