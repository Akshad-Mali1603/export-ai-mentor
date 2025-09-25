import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/verify-buyer';



export const verifyBuyer = (buyer: any) => {
  // const payload = {
  //   companyName: buyer.companyName,
  //   websiteUrl: buyer.websiteUrl, 
  //   email: buyer.email,
  //   country: buyer.country
  // };
  return axios.post(REST_API_BASE_URL, buyer);
};