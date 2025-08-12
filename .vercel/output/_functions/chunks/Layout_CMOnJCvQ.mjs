import { d as createComponent, e as createAstro, m as maybeRenderHead, f as addAttribute, i as renderSlot, g as renderTemplate, h as renderComponent, s as renderScript, t as renderHead } from './astro/server_D-TTg8sT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$7 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Logo;
  const { className, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(className, "class")}${addAttribute(href, "href")} data-astro-cid-tvrurpns> ${renderSlot($$result, $$slots["before"])} ${renderSlot($$result, $$slots["default"])} ${renderSlot($$result, $$slots["after"])} </a> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/Logo.astro", void 0);

const $$Astro$6 = createAstro();
const $$Close = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Close;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(color, "color")}${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/svg/Close.astro", void 0);

const $$Astro$5 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Menu;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(color, "color")} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path> <path d="M4 18l16 0"></path> </svg>`;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/svg/Menu.astro", void 0);

const $$NavigationMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="contenedorNavBar desktop close" data-astro-cid-yijpcu7t> <button class="btnMenu" data-astro-cid-yijpcu7t> ${renderComponent($$result, "Menu", $$Menu, { "width": "32", "heigth": "90", "color": "var(--grey)", "data-astro-cid-yijpcu7t": true })} </button> <nav data-astro-cid-yijpcu7t> <button class="btnClose" data-astro-cid-yijpcu7t> ${renderComponent($$result, "Close", $$Close, { "width": "32", "heigth": "32", "color": "var(--grey)", "data-astro-cid-yijpcu7t": true })} </button> <div class="expandedLogo" data-astro-cid-yijpcu7t> ${renderComponent($$result, "Logo", $$Logo, { "className": "logo", "href": "./", "data-astro-cid-yijpcu7t": true }, { "before": ($$result2) => renderTemplate`<picture class="contenedorLogo" data-astro-cid-yijpcu7t> <img class="contenedorLogo_img" src="./public/icons/whiteLogo.png" alt="Logo de Leonardo Dillon" data-astro-cid-yijpcu7t> </picture>`, "default": ($$result2) => renderTemplate` 
LDILLON
` })} </div> <a href="/#" data-astro-cid-yijpcu7t>
Inicio
</a> <a href="/#aboutMe" data-astro-cid-yijpcu7t>
Sobre mí
</a> <a href="/#proyects" data-astro-cid-yijpcu7t>
Proyectos
</a> <a href="/contacto" data-astro-cid-yijpcu7t>
Contacto
</a> </nav> </div>  ${renderScript($$result, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/NavigationMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/NavigationMenu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="dark" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "className": "logo", "href": "/", "data-astro-cid-3ef6ksr2": true }, { "before": ($$result2) => renderTemplate`<picture class="contenedorLogo" data-astro-cid-3ef6ksr2> <img class="contenedorLogo_img" src="/public/icons/whiteLogo.png" alt="Logo de Leonardo Dillon" data-astro-cid-3ef6ksr2> </picture>`, "default": ($$result2) => renderTemplate` 
LDILLON
` })} ${renderComponent($$result, "NavigationMenu", $$NavigationMenu, { "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Email;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail" data-astro-cid-xldlwi6o><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-xldlwi6o></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" data-astro-cid-xldlwi6o></path><path d="M3 7l9 6l9 -6" data-astro-cid-xldlwi6o></path></svg> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/svg/networks/Email.astro", void 0);

const $$Astro$3 = createAstro();
const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$GitHub;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github" data-astro-cid-c3ulhdbm><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-c3ulhdbm></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-c3ulhdbm></path></svg> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/svg/networks/GitHub.astro", void 0);

const $$Astro$2 = createAstro();
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Linkedin;
  const { width, height, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(width, "width")}${addAttribute(height, "height")} viewBox="0 0 24 24" fill="none"${addAttribute(color, "stroke")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" data-astro-cid-7tcls45l><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-7tcls45l></path><path d="M8 11v5" data-astro-cid-7tcls45l></path><path d="M8 8v.01" data-astro-cid-7tcls45l></path><path d="M12 16v-5" data-astro-cid-7tcls45l></path><path d="M16 16v-3a2 2 0 1 0 -4 0" data-astro-cid-7tcls45l></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" data-astro-cid-7tcls45l></path></svg> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/svg/networks/Linkedin.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte> <h2 data-astro-cid-sz7xmlte>Leonardo Dillon</h2> <p data-astro-cid-sz7xmlte>Diseñador y Programador Web</p> </div> <ul class="footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/#aboutMe" data-astro-cid-sz7xmlte>Sobre mí</a></li> <li data-astro-cid-sz7xmlte><a href="/#proyects" data-astro-cid-sz7xmlte>Proyectos</a></li> <li data-astro-cid-sz7xmlte><a href="/contacto" data-astro-cid-sz7xmlte>Contacto</a></li> </ul> <div class="footer-social" data-astro-cid-sz7xmlte> <a href="https://github.com/tu_usuario" target="_blank" aria-label="GitHub" data-astro-cid-sz7xmlte> ${renderComponent($$result, "GitHub", $$GitHub, { "width": "32", "height": "32", "color": "var(--text--color-white)", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://linkedin.com/in/tu_usuario" target="_blank" aria-label="LinkedIn" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Linkedin", $$Linkedin, { "width": "32", "height": "32", "color": "var(--text--color-white)", "data-astro-cid-sz7xmlte": true })} </a> <a href="mailto:tu_email@example.com" aria-label="Email" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Email", $$Email, { "width": "32", "height": "32", "color": "var(--text--color-white)", "data-astro-cid-sz7xmlte": true })} </a> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2025 Leonardo Dillon.</p> </div> </footer> `;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="../../public/styles/colors.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Leonardo Dillon</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$GitHub as a };
