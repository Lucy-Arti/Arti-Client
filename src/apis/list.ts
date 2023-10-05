import axios from "axios";

const baseURL = `https://arti-fashion.shop/`;

export const GetAllProductLists = async() => {
    try{
        const response = await axios.get(`${baseURL}api/v1/clothes`);
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const GetProductDetail = async(id:string) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/clothes/${id}`);
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const GetDesignerDetail = async(id:string) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/designers/${id}`);
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const getMarked = async(id:number, token:string|null) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/likes/${id}/member`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const postMarked = async(id:number, token:string|null) => {
    try{
        const response = await axios.post(`${baseURL}api/v1/likes/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}