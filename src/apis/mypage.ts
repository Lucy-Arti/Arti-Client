import axios from "axios";
const baseURL = `https://arti-fashion.shop/`;

export const GetVotedProductLists = async(token:string) => {
    try{
        const response = await axios.get(`${baseURL}api/v1/members`, {
            headers: { Authorization: `Bearer ${token}` },
          });
        console.log(response.data);
        return response;
    } catch(error) {
        console.log(error);
        return false;
    }
}