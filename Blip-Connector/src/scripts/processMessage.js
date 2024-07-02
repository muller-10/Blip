import 'dotenv/config';
import { getIdentifier } from '../api/getIdentifier.js';
import { sendMessage } from '../api/sendMessage.js';

const phoneNumber = '5554996123121';
const templateName = 'captacao_sim_black_jun24'; // Substitua pelo nome do seu template
const params = ['Monique', '01/01/24']; // Substitua pelos parâmetros desejados

async function processMessage() {
  try {
    const guid = await getIdentifier(phoneNumber); // Obtenha o GUID
    console.log('GUID obtido:', guid); // Log para depuração
    const response = await sendMessage(phoneNumber, templateName, params, guid); // Envie a mensagem usando o GUID
    console.log('Resposta da mensagem enviada:', response); // Log para depuração
  } catch (error) {
    console.error('Erro no processo de envio de mensagem:', error);
  }
}

processMessage();