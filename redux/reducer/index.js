import {combineReducers} from 'redux';

import {contactsReducer} from './contactsReducer';

const reducers = combineReducers({
  allContacts: contactsReducer,
});

export default reducers;
