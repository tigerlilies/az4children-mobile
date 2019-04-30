import axios from 'axios';
import config from '../config/config';
import {
  RESET,
  UNASSIGNED,
  UNASSIGNED_SUCCESS,
  INTEREST,
  INTEREST_SUCCESS
} from './types';
// import { postInterest } from '../services/profile';

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

export const createInterestSuccess = () => {
  return ({
    type: INTEREST_SUCCESS
  });
}

export const createInterest = interest => dispatch => {
  console.log('in createInterest >>> interest ', interest);
  console.log('in createInterest before dispatch >>> route ', `${API_URL}/api/public/interest`);
  
  console.log('in createInterest dispatch INTEREST ', INTEREST);
  dispatch({
    type: INTEREST
  });

  console.log('in createInterest after dispatch >>> route ', `${API_URL}/api/public/interest`);
  return axios.post(`${API_URL}/api/public/interest`, interest)
    .then(response => {
      console.log('createInterest >>> response ', response);
      dispatch(createInterestSuccess())
    })
    .catch(error => console.log('createInterest >>> error ', error))
};

// export const createInterest = interest => {
//   console.log('in createInterest >>> interest ', interest);
//   console.log('in createInterest before dispatch >>> route ', `${API_URL}/api/public/interest`);
//   return dispatch => {
//     console.log('in createInterest dispatch INTEREST ', INTEREST);
//     dispatch({
//       type: INTEREST
//     });

//     console.log('in createInterest after dispatch >>> route ', `${API_URL}/api/public/interest`);
//     return axios.post(`${API_URL}/api/public/interest`, interest)
//     .then(response => {
//       console.log('createInterest >>> response ', response);
//       dispatch(createInterestSuccess())
//     })
//     .catch(error => console.log('createInterest >>> error ', error))
//   }
// };

export const reset = () => {
  return ({
    type: RESET,
  });
}