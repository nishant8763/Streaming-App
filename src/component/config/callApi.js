import AsyncStorage from '@react-native-community/async-storage';
// declare api
const API = 'https://citytour.icodexa.com';  //'https://kissaapp.icodexa.com';

export const CallApi = async (method, apiPath, params) => {
  let token = await AsyncStorage.getItem('token');
  const url = `${API + apiPath}`;
  let options = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: params,
  };
  return fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return { message: err, type: 'danger' };
    });
};
