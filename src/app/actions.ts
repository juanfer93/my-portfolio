'use server';

import { contactFormSchema, ContactFormValues } from '../lib/contact-schema';

export type ContactFormState = {
  success: boolean;
  message: string;
  whatsappUrl?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    phone?: string[];
    countryCode?: string[];
  };
};

export async function sendContactMessageAction(
  data: ContactFormValues
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Falló la validación. Por favor, revisa los campos.',
    };
  }

  const { name, email, message, countryCode, phone } = validatedFields.data;
  
  // Tu número de teléfono (sin el + ni espacios, solo números)
  const yourPhoneNumber = '573233321701'; 

  // --- CAMBIO AQUÍ: Formato "Prospecto Real" ---
  // Estructura: Saludo casual + Contexto + Mensaje del usuario + Cierre con datos
  
  let whatsappMessage = `Hola Juanfer! 👋 Vengo de ver tu portafolio.\n\n`;
  whatsappMessage += `Soy *${name}* y te escribo por lo siguiente:\n\n`;
  whatsappMessage += `"${message}"\n\n`;
  
  // Añadimos los datos de contacto como si la persona te los dejara al final
  whatsappMessage += `________\n`;
  whatsappMessage += `Te dejo mis datos de contacto:\n`;
  whatsappMessage += `📧 ${email}`;

  if (phone) {
    const fullPhoneNumber = `${countryCode} ${phone}`;
    whatsappMessage += `\n📱 ${fullPhoneNumber}`;
  }

  // Codificamos la URL
  const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    success: true,
    message: '¡Serás redirigido a WhatsApp para enviar tu mensaje!',
    whatsappUrl: whatsappUrl,
  };
}