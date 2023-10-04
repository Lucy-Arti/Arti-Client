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