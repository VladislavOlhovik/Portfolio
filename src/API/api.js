import axios from 'axios';

export const emailAPI = {
  sendMessage(data) {
    return axios.post(
      'https://smtp-servernodejs.herokuapp.com/sendMessage',
      data,
    );
  },
};
