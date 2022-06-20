import axios from 'axios';
import { UserType } from '../consts/enums';
import { Inquiry, User } from '../consts/types';
import { Urls } from './urls';

export const inquiryApi = {
  getInquiry: async (userId: number, userType: UserType) => {
    try {
      const { data } = await axios.get<Inquiry>(
        `${Urls.baseUrl}${
          userType === UserType.CONSUMER
            ? Urls.inquieriesConsumer
            : Urls.inquieriesSupplier
        }/${userId}`,
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
  addInquiry: async (userType: UserType, inquiry: Inquiry) => {
    try {
      console.log({
        url: `${Urls.baseUrl}${
          userType === UserType.CONSUMER
            ? Urls.inquieriesConsumer
            : Urls.inquieriesSupplier
        }`,
      });
      console.log({ inquiry });

      const { data } = await axios.post<Inquiry>(
        `${Urls.baseUrl}${
          userType === UserType.CONSUMER
            ? Urls.inquieriesConsumer
            : Urls.inquieriesSupplier
        }`,
        inquiry,
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
