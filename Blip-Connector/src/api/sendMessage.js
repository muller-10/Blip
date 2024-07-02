import axios from 'axios';
import config from '../config/config.js';

export async function sendMessage(phoneNumber, templateName, params, guid) {
  const url = config.apiUrlMessage;
  const data = {
    id: guid, // Use o GUID fornecido
    to: `${phoneNumber}@wa.gw.msging.net`,
    type: 'application/json',
    content: {
      type: 'template',
      template: {
        name: templateName,
        language: {
          code: 'pt_BR',
          policy: 'deterministic'
        },
        components: [
          {
            type: 'body',
            parameters: params.map(param => ({ type: 'text', text: param }))
          }
        ]
      }
    }
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': config.apiToken
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
}