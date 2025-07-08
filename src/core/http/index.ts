import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { get, remove } from 'core/util/localStorage';

const Axios = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_API_BASE_URL,
});

Axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  // const token = 'e344token---fds';
  // if (request.headers) {
  //   request.headers['Authorization'] = 'Bearer ' + token;
  // }

  // const token = localStorage.getItem('token');
  const token = get('token');
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }

  return request;
});

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError<any>) => {
    if (error.response?.status === 401) {
      // Token is invalid or expired
      handleSessionExpiration();
    }
    return Promise.reject(error);
  }
);

const handleSessionExpiration = () => {
  // Example: Store session expired flag in localStorage or a global state
  remove('token');

  // Optional: Redirect to login or trigger a logout action
  // window.location.href = '/login';
};

export const isCancel = axios.isCancel;

export default Axios;
