import axios from 'axios';
const url = 'https://annual-sdk-api.onrender.com/api/v1';

const getToken = async (idUser, password) => {
  try {
    const resp = await axios.post(`${url}/login`, { idUser, password });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const getDeposits = async (token) => {
  try {
    const resp = await axios.post(`${url}/deposits/list`, { token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const addDeposit = async (deposito, token) => {
  try {
    const resp = await axios.post(`${url}/deposits/add`, { deposito, token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const deleteDeposit = async (codigoDeposito, token) => {
  try {
    const resp = await axios.post(`${url}/deposits/delete`, { codigoDeposito, token });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export { getToken, getDeposits, addDeposit, deleteDeposit };
