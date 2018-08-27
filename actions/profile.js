import axios from 'axios';
import config from '../config/config';
import {
  UNASSIGNED,
  RESET
} from './types';

const API_URL = config.API_URL;

export const fetchUnassignedSuccess = data => {
  return ({
    type: UNASSIGNED,
    profiles: data
  });
};

export const fetchUnassigned = () => {
  return dispatch => {
    return axios.get(`${API_URL}/api/public`)
    .then(response => {
      dispatch(fetchUnassignedSuccess(response.data))
    })
    .catch(error => {
      throw(error);
    })
  };
};

export const reset = () => {
  return ({
    type: RESET,
  });
}