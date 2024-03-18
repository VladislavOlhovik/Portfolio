import axios from 'axios';

import { getNonPersonalInfo } from '@assets';

const instance = axios.create({
  baseURL: 'http://localhost:3003/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const emailAPI = {
  async sendMessage(data) {
    try {
      return await instance.post('sendMessage', data);
    } catch (error) {
      console.error('emailAPI error', error);
    }
  },
  async sendNonPersonalInfo() {
    try {
      await instance.post('sendInfo', getNonPersonalInfo());
    } catch (error) {
      console.error('emailAPI error', error);
    }
  },
};
