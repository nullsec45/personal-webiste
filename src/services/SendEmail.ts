/* eslint-disable no-useless-catch */
import emailjs from '@emailjs/browser';

export const sendEmail = async (
  form: HTMLFormElement,
  serviceId: string,
  templateId: string,
  publicKey: string
) => {
  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    );
    return response;
  } catch (error) {
    throw error;
  }
};
