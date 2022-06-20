import axios from 'axios';
import { User } from '../consts/types';
import { Urls } from './urls';

export const userApi = {
  getUser: async (clientUserId: string) => {
    try {
      const { data } = await axios.get<User>(
        `${Urls.baseUrl}${Urls.getByClientId}${clientUserId}`,
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('error message: ', error.message);
        return error.message;
      } else {
        console.error('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  },
  setUser: async (user: User) => {
    try {
      const { data } = await axios.post<User>(
        `${Urls.baseUrl}${Urls.users}`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
        },
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('error message: ', error.message);
        return error.message;
      } else {
        console.error('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  },
};
