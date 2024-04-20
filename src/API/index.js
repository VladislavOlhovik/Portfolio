import axios from 'axios';

import { getNonPersonalInfo, getLocation } from '@assets';

const instance = axios.create({
  baseURL: 'https://portfolio-gmail-smtp-jet.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const emailAPI = {
  async sendMessage(data) {
    try {
      return await instance.post('sendMessage', data);
    } catch (error) {
      console.error('sendMessage API error', error);
    }
  },
  async sendNonPersonalInfo() {
    try {
      await instance.post('sendInfo', getNonPersonalInfo());
    } catch (error) {
      console.error('sendNonPersonalInfo API error', error);
    }
  },
  async sendLocation() {
    try {
      const data = await getLocation()
      await instance.post('sendLocation', data);
    } catch (error) {
      console.error('sendLocation API  error', error);
    }
  },
};
