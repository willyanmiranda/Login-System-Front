import axios from 'axios';

const API_URL = "http://localhost:3000/api"

export const register = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/user/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Erro ao registrar');
    }
};