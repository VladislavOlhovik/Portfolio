import { emailAPI } from '@API';

const SET_MESSAGE = 'contactsReducer/SET_MESSAGE';
let initialState = {
  message: null,
  isDone: null,
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setMessage = (message, isDone) => ({
  type: SET_MESSAGE,
  payload: { message, isDone },
});

export const sendContacts = data => async dispatch => {
  try {
    let response = await emailAPI.sendMessage(data);
    if (response.statusText === 'OK') {
      dispatch(setMessage(`Thank you, ${response.data}:)`, true));
    }
  } catch (error) {
    dispatch(setMessage('Sorry! Your Message has not been sent', false));
  }
};
