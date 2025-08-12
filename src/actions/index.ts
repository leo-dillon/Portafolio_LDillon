import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { Resend } from "resend";
import { getSecret } from "astro:env/server";

const resend_key = getSecret("RESEND_API_TOKEN");
const resend_gmail = getSecret("MI_GMAIL");
const resend = new Resend(resend_key);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      nombre: z.string(),
      mensaje: z.string(),
    }),
    handler: async ({ email, nombre, mensaje }) => {
      try {
        const { data, error } = await resend.emails.send({
          from: nombre + " <onboarding@resend.dev>", 
          to: [resend_gmail],
          subject: "Portafolio LDillon",
          html: `
            <div>
              <h1>Nuevo mensaje del portafolio</h1>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p>${mensaje}</p>
            </div>
          `,
        });

        if (error) {
          console.error(error);
          return { success: false, error };
        }

        await resend.emails.send({
          from: "Leonardo Dillon <onboarding@resend.dev>", 
          to: [ email ],
          subject: "Mail recibido",
          replyTo: [ resend_gmail ],
          html: `
            <div>
              <h1>Gracias por enviar un mail</h1>
              <p> En breve me pondre con contacto </p>
              <small> Saludos </small>
            </div>
          `,
        });

        return { success: true, data };
      } catch (err) {
        console.error(err);
        return { success: false, error: "Error enviando el correo" };
      }
    },
  }),
};
