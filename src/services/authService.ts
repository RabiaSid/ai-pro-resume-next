import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://app.aiproresume.com/api/v1";

const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data; 
};

const register = async (userData: { name: string; email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

const logout = () => {
  Cookies.remove("userToken");
};

export default {login, register, logout} 
