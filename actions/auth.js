import axios from 'axios';
import { API } from '../config';

export const signup = (user) => {
  return axios.post(`${API}/signup`, user);
};
