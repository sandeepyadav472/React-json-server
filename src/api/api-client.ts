import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3004/users/',
});

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
  OPTIONS: 'OPTIONS',
} as const;
