import {setContacts} from '../redux/actions/contactsAction';

export const getUsers = async dispatch => {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();

  console.log('this data -->>', data);

  dispatch(setContacts(data));
};
