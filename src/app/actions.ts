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

// const ContactSchema = z.object({
//   name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
//   email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
//   message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
//   countryCode: z.string(),
//   phone: z.string().optional(),
// });

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
  // Replace with your actual phone number
  const yourPhoneNumber = '573233321701'; // Example: Colombian number

  let whatsappMessage = `*Nuevo Mensaje del Portfolio*
*Nombre:* ${name}
*Email:* ${email}`;

  if (phone) {
    const fullPhoneNumber = `${countryCode}${phone}`;
    whatsappMessage += `
*Teléfono:* ${fullPhoneNumber}`;
  }

  whatsappMessage += `
*Mensaje:*
${message}`;

  const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return {
    success: true,
    message: '¡Serás redirigido a WhatsApp para enviar tu mensaje!',
    whatsappUrl: whatsappUrl,
  };
}
