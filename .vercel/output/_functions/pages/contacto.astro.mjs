import { d as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, g as renderTemplate, h as renderComponent } from '../chunks/astro/server_D-TTg8sT.mjs';
import 'kleur/colors';
import 'clsx';
import { a as actions } from '../chunks/_astro_actions_CjkbmbZz.mjs';
/* empty css                                    */
import { $ as $$Layout } from '../chunks/Layout_CMOnJCvQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const result = Astro2.getActionResult(actions.send);
  return renderTemplate`${maybeRenderHead()}<form class="contact-form" method="post"${addAttribute(actions.send, "action")} data-astro-cid-svshx33u> <div data-astro-cid-svshx33u> <label data-astro-cid-svshx33u>Nombre:</label> <input type="text" name="nombre" required placeholder="Estaban Camello" data-astro-cid-svshx33u> </div> <div data-astro-cid-svshx33u> <label data-astro-cid-svshx33u>Correo:</label> <input type="email" name="email" required placeholder="estebanCamello33@gmail.com" data-astro-cid-svshx33u> </div> <div data-astro-cid-svshx33u> <label data-astro-cid-svshx33u>Mensaje:</label> <textarea name="mensaje" rows="5" required data-astro-cid-svshx33u> Este es un mensaje de ejemplo    </textarea> </div> <button data-astro-cid-svshx33u>Enviar mensaje</button> ${result && result.data?.success && renderTemplate`<p class="success" data-astro-cid-svshx33u>✅ Mensaje enviado con éxito</p>`} ${result && !result.data?.success && renderTemplate`<p class="error" data-astro-cid-svshx33u>❌ Hubo un problema al enviar</p>`} </form> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/ContactForm.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-2mxdoeuz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="contact-container" data-astro-cid-2mxdoeuz> <div class="text" data-astro-cid-2mxdoeuz> <div data-astro-cid-2mxdoeuz> <h1 data-astro-cid-2mxdoeuz>¿Querés contactarte conmigo?</h1> <p data-astro-cid-2mxdoeuz>Dejame tu mensaje y te respondere lo antes posible.</p> </div> <picture data-astro-cid-2mxdoeuz> <img src="../../public/pictures/a4.png" alt="" data-astro-cid-2mxdoeuz> </picture> </div> <div class="form" data-astro-cid-2mxdoeuz> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "data-astro-cid-2mxdoeuz": true })} </div> </section> ` })} `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
