import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { contactsReducer } from './contacts.reducer';
import { infoReducer } from './info-reducer';

let reducers = combineReducers({
  contacts: contactsReducer,
  info: infoReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
export { setMessage, sendContacts } from './contacts.reducer';
