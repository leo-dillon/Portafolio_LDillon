import { Resend } from "resend";
import { getSecret } from "astro:env/server";
import type { APIRoute } from "astro";

const resend_key = getSecret("RESEND_API_TOKEN");
const resend_gmail = getSecret("MI_GMAIL");

const resend = new Resend(resend_key);

export const POST: APIRoute = async ({ request }) => {
    const req = await request.json();
    const { email, nombre, mensaje } = req; 

    const { data, error } = await resend.emails.send({
        from: nombre + " <onboarding@resend.dev>", 
        to: [resend_gmail],
        subject: "Portafolio LDillon",
        replyTo: email,
        html: `
        <div>
            <h1>Nuevo mensaje del portafolio</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p>${mensaje}</p>
        </div>
        `,
    });

    if( data == null ) {
        return new Response(
            JSON.stringify({ 
                envio: false,
                message: "Error al enviar el correo electrónico",
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }

    return new Response(
        JSON.stringify({ 
            envio: true,
            message: "Correo electrónico enviado con éxito",
        }),
        {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        }
    );
};
