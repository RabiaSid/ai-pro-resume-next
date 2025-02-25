import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://backend.aiproresume.com/public/api"; 

const login = async (credentials: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data; 
};

const register = async (userData: { name: string; email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/register`, userData);
  return response.data;
};

const logout = () => {
  Cookies.remove("token");
};

export default {login, register, logout} 
