import axios from "axios";
const baseURL = `https://arti-fashion.shop/`;

export const GetSearchProductList = async(val:string) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/clothes/search?query=${val}`);
        // console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}