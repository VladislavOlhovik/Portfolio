import axios from 'axios';

const instance = axios.create({
  baseURL:'https://smtp-servernodejs.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  }
})

export const emailAPI = {
  async sendMessage(data) {
    try {
    return await instance.post(
      'sendMessage',
      data,
    );
    } catch (error) {
      console.error('emailAPI error', error);
    }
  },
};
