import axios from "axios";
const baseURL = `https://arti-fashion.shop/`;

export const GetVotedProductLists = async(token:string|null) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/members/1st`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        // console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const GetMarkedProductLists = async(token:string|null) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/members/mine`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        // console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}

export const GetRecentProductLists = async(token:string|null) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/recent`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        // console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}