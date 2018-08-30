import axios from 'axios';
import config from '../config/config';
import {
  RESET,
  UNASSIGNED,
  UNASSIGNED_SUCCESS,
} from './types';

const API_URL = config.API_URL;

export const fetchUnassignedSuccess = data => {
  return ({
    type: UNASSIGNED_SUCCESS,
    profiles: data
  });
};

export const fetchUnassigned = () => {
  return dispatch => {
    dispatch({
      type: UNASSIGNED
    });

    return axios.get(`${API_URL}/api/public`)
    .then(response => {
      dispatch(fetchUnassignedSuccess(response.data))
    })
    .catch(error => {
      console.log('fetchUnassigned >>> error ', error);
    })
  };
};

export const reset = () => {
  return ({
    type: RESET,
  });
}