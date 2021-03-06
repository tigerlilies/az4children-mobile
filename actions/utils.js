import axios from 'axios';
import config from '../config/config';
import { EMAIL } from './types';

const API_URL = config.API_URL;

export const sendEmail = (info) => {
  return ({
    type: EMAIL,
    payload: axios.post(`${API_URL}/api/utils/send`, info)
  });
};
