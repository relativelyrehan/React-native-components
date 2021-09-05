import {ActionTypes} from '../constants';

export const setContacts = contacts => {
  return {
    type: ActionTypes.SET_CONTACTS,
    payload: contacts,
  };
};
