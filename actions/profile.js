import axios from 'axios';
import config from '../config';

const API_URL = config.API_URL;

export const fetchProfiles = () => {
  return ({
    type: 'PROFILE',
    payload: axios.get(`${API_URL}/api/profiles`)
  });
};

export const fetchUnassigned = () => {
  return ({
    type: 'UNASSIGNED',
    payload: axios.get(`${API_URL}/api/profiles/unassigned`)
  });
};
