import {ActionTypes} from '../constants';

const initialState = [{category: 'A'}, {data: ''}];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_CONTACTS:
      return [...state, {data: action.payload}];
    default:
      return state;
  }
};
