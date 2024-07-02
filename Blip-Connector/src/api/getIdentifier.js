import axios from 'axios';
import config from '../config/config.js';
import { generateGUID } from '../utils/generateGUID.js';

export async function getIdentifier(phoneNumber) {
  const url = config.apiUrlIdentifier;
  const guid = generateGUID(); // Gere o GUID aqui
  const data = {
    id: guid,
    to: 'postmaster@wa.gw.msging.net',
    method: 'get',
    uri: `lime://wa.gw.msging.net/accounts/${phoneNumber}`
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': config.apiToken
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Identificador obtido:', response.data); // Adicione este log para depuração
    return guid; // Retorne o GUID
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
}