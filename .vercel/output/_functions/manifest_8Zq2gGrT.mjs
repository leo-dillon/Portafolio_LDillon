import 'kleur/colors';
import { j as decodeKey } from './chunks/astro/server_D-TTg8sT.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_YpMkLR8-.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BY41HrDJ.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/","cacheDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/node_modules/.astro/","outDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/dist/","srcDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/src/","publicDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/public/","buildClientDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/dist/client/","buildServerDir":"file:///C:/Users/jeann/Desktop/Github/02_En%20desarrollo/Portafolio_LDillon/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".contact-form[data-astro-cid-svshx33u]{width:100%;padding:0 8px;display:flex;flex-direction:column;gap:16px;text-align:left}.contact-form[data-astro-cid-svshx33u] div[data-astro-cid-svshx33u]{width:90%;margin:0 auto}.contact-form[data-astro-cid-svshx33u] label[data-astro-cid-svshx33u]{width:max-content;display:flex;flex-direction:column;font-weight:600;line-height:2;color:var(--text--color-white);opacity:.7}.contact-form[data-astro-cid-svshx33u] input[data-astro-cid-svshx33u],.contact-form[data-astro-cid-svshx33u] textarea[data-astro-cid-svshx33u]{width:calc(100% - 24px);padding:10px 12px;margin:0 auto;font-size:16px;border:0;border-radius:4px;background-color:var(--background--color-Big-light-white);transition:border-color .2s;color:#fff}.contact-form[data-astro-cid-svshx33u] input[data-astro-cid-svshx33u]:focus,.contact-form[data-astro-cid-svshx33u] textarea[data-astro-cid-svshx33u]:focus{outline:none;border-color:#264de4}.contact-form[data-astro-cid-svshx33u] button[data-astro-cid-svshx33u]{width:90%;padding:10px 20px;margin:0 auto;background-color:#264de4;color:#fff;border:none;border-radius:8px;font-size:16px;cursor:pointer;transition:background-color .3s}.contact-form[data-astro-cid-svshx33u] button[data-astro-cid-svshx33u]:hover{background-color:#1b39a5}.contact-container[data-astro-cid-2mxdoeuz]{display:flex;gap:32px;max-width:900px;width:calc(90% - 24px);margin:60px auto;padding:32px 12px;border-radius:12px;box-shadow:0 4px 24px #0000001a;text-align:center}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz]{display:flex;flex-direction:column;align-items:center;width:100%}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz].form{max-width:500px;background-color:var(--background--color-light-blue-70);padding:24px 0;border-radius:24px}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz] picture[data-astro-cid-2mxdoeuz]{display:flex;align-items:center;justify-content:center;width:100%}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz] picture[data-astro-cid-2mxdoeuz] img[data-astro-cid-2mxdoeuz]{width:100%;max-width:200px;border-radius:24px}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz] h1[data-astro-cid-2mxdoeuz]{margin-bottom:8px;font-size:28px;color:var(--text--color-white)}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz] p[data-astro-cid-2mxdoeuz]{margin-bottom:24px;color:var(--text--color-white)}@media (width < 700px){.contact-container[data-astro-cid-2mxdoeuz]{flex-direction:column;justify-content:center;align-items:center;margin:4px auto}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz].text{flex-direction:column-reverse}.contact-container[data-astro-cid-2mxdoeuz] div[data-astro-cid-2mxdoeuz].text picture[data-astro-cid-2mxdoeuz]{margin-bottom:24px}}\n"},{"type":"external","src":"/_astro/contacto.04JZvu33.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.cEPBmR4k.css"},{"type":"external","src":"/_astro/contacto.04JZvu33.css"},{"type":"inline","content":"svg[data-astro-cid-jlyynhtb]{transition:stroke .3s ease-out}svg[data-astro-cid-jlyynhtb]:hover{stroke:var(--text--color-white)}svg[data-astro-cid-4f3pgnds]{transition:stroke .3s ease-out}svg[data-astro-cid-4f3pgnds]:hover{stroke:var(--text--color-white)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:actions",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/pages/proyectos/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/proyectos/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:src/pages/proyectos/[id]@_@astro":"pages/proyectos/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:\\Users\\jeann\\Desktop\\Github\\02_En desarrollo\\Portafolio_LDillon\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\jeann\\Desktop\\Github\\02_En desarrollo\\Portafolio_LDillon\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DfJ1cNX3.mjs","C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BihMeaha.mjs","\u0000@astrojs-manifest":"manifest_8Zq2gGrT.mjs","C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/seccion/Technology.astro?astro&type=script&index=0&lang.ts":"_astro/Technology.astro_astro_type_script_index_0_lang.BP59f2k7.js","C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/NavigationMenu.astro?astro&type=script&index=0&lang.ts":"_astro/NavigationMenu.astro_astro_type_script_index_0_lang.tvx0OMqP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/jeann/Desktop/Github/02_En desarrollo/Portafolio_LDillon/src/components/NavigationMenu.astro?astro&type=script&index=0&lang.ts","function n(){window.innerWidth<550?t?.classList.remove(\"desktop\"):t?.classList.add(\"desktop\")}let t=document.querySelector(\"div.contenedorNavBar\"),d=document.querySelector(\"button.btnMenu\"),c=document.querySelector(\"button.btnClose\"),e=document.querySelector(\"nav\");function r(){d=document.querySelector(\"button.btnMenu\"),c=document.querySelector(\"button.btnClose\"),e=document.querySelector(\"nav\");let o=document.querySelectorAll(\"nav a\");d?.addEventListener(\"click\",()=>e?.classList.add(\"open\")),c?.addEventListener(\"click\",()=>e?.classList.remove(\"open\")),o.forEach(i=>i.addEventListener(\"click\",()=>e?.classList.remove(\"open\")))}window.addEventListener(\"resize\",n);window.addEventListener(\"load\",()=>{n(),r()});document.addEventListener(\"astro:after-swap\",()=>{t=document.querySelector(\"div.contenedorNavBar\"),n(),r()});"]],"assets":["/_astro/a4.CVUIlkT6.png","/_astro/_id_.CW0r5lmG.css","/_astro/contacto.04JZvu33.css","/_astro/index.cEPBmR4k.css","/pictures/a4.png","/pictures/desafios_ej.png","/pictures/desafios_home.png","/pictures/fragance.png","/pictures/leo_avatar.png","/icons/darkLogo.png","/icons/whiteLogo.png","/styles/colors.css","/download/Leonardo_Dillon_CV.pdf","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/Technology.astro_astro_type_script_index_0_lang.BP59f2k7.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xO4TJp6eKlut8L0aK1PxcWrR+S9OHyIusXcKWtArmzs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
