import './chunks/_astro_actions_CjkbmbZz.mjs';
import './chunks/_astro_content_DG2LvDKd.mjs';
import { Resend } from 'resend';
import { c as createInvalidVariablesError, g as getEnv$1, s as setOnSetGetEnv } from './chunks/runtime_Uyj9hRzF.mjs';
import { d as defineAction } from './chunks/server_B_FnIbRg.mjs';
import * as z from 'zod';

const schema = {"RESEND_API_TOKEN":{"context":"server","access":"secret","type":"string"},"MI_GMAIL":{"context":"server","access":"public","type":"string"}};

function getEnvFieldType(options) {
  const optional = options.optional ? options.default !== void 0 ? false : true : false;
  let type;
  if (options.type === "enum") {
    type = options.values.map((v) => `'${v}'`).join(" | ");
  } else {
    type = options.type;
  }
  return `${type}${optional ? " | undefined" : ""}`;
}
const stringValidator = ({ max, min, length, url, includes, startsWith, endsWith }) => (input) => {
  if (typeof input !== "string") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (max !== void 0 && !(input.length <= max)) {
    errors.push("max");
  }
  if (min !== void 0 && !(input.length >= min)) {
    errors.push("min");
  }
  if (length !== void 0 && !(input.length === length)) {
    errors.push("length");
  }
  if (url !== void 0 && !URL.canParse(input)) {
    errors.push("url");
  }
  if (includes !== void 0 && !input.includes(includes)) {
    errors.push("includes");
  }
  if (startsWith !== void 0 && !input.startsWith(startsWith)) {
    errors.push("startsWith");
  }
  if (endsWith !== void 0 && !input.endsWith(endsWith)) {
    errors.push("endsWith");
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: input
  };
};
const numberValidator = ({ gt, min, lt, max, int }) => (input) => {
  const num = parseFloat(input ?? "");
  if (isNaN(num)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  const errors = [];
  if (gt !== void 0 && !(num > gt)) {
    errors.push("gt");
  }
  if (min !== void 0 && !(num >= min)) {
    errors.push("min");
  }
  if (lt !== void 0 && !(num < lt)) {
    errors.push("lt");
  }
  if (max !== void 0 && !(num <= max)) {
    errors.push("max");
  }
  if (int !== void 0) {
    const isInt = Number.isInteger(num);
    if (!(int ? isInt : !isInt)) {
      errors.push("int");
    }
  }
  if (errors.length > 0) {
    return {
      ok: false,
      errors
    };
  }
  return {
    ok: true,
    value: num
  };
};
const booleanValidator = (input) => {
  const bool = input === "true" ? true : input === "false" ? false : void 0;
  if (typeof bool !== "boolean") {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: bool
  };
};
const enumValidator = ({ values }) => (input) => {
  if (!(typeof input === "string" ? values.includes(input) : false)) {
    return {
      ok: false,
      errors: ["type"]
    };
  }
  return {
    ok: true,
    value: input
  };
};
function selectValidator(options) {
  switch (options.type) {
    case "string":
      return stringValidator(options);
    case "number":
      return numberValidator(options);
    case "boolean":
      return booleanValidator;
    case "enum":
      return enumValidator(options);
  }
}
function validateEnvVariable(value, options) {
  const isOptional = options.optional || options.default !== void 0;
  if (isOptional && value === void 0) {
    return {
      ok: true,
      value: options.default
    };
  }
  if (!isOptional && value === void 0) {
    return {
      ok: false,
      errors: ["missing"]
    };
  }
  return selectValidator(options)(value);
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

// @ts-expect-error
/** @returns {string} */
// used while generating the virtual module
// biome-ignore lint/correctness/noUnusedFunctionParameters: `key` is used by the generated code
// biome-ignore lint/correctness/noUnusedVariables: `key` is used by the generated code
const getEnv = (key) => {
	return getEnv$1(key);
};

const getSecret = (key) => {
	return getEnv(key);
};

const _internalGetSecret = (key) => {
	const rawVariable = getEnv(key);
	const variable = rawVariable === '' ? undefined : rawVariable;
	const options = schema[key];

	const result = validateEnvVariable(variable, options);
	if (result.ok) {
		return result.value;
	}
	const type = getEnvFieldType(options);
	throw createInvalidVariablesError(key, type, result);
};

setOnSetGetEnv(() => {
	_internalGetSecret("RESEND_API_TOKEN");

});
const MI_GMAIL = "jeannotegui@gmail.com";_internalGetSecret("RESEND_API_TOKEN");

const resend_key = getSecret("RESEND_API_TOKEN");
const resend = new Resend(resend_key);
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
      nombre: z.string(),
      mensaje: z.string()
    }),
    handler: async ({ email, nombre, mensaje }) => {
      try {
        const { data, error } = await resend.emails.send({
          from: nombre + " <onboarding@resend.dev>",
          to: [MI_GMAIL],
          subject: "Portafolio LDillon",
          html: `
            <div>
              <h1>Nuevo mensaje del portafolio</h1>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p>${mensaje}</p>
            </div>
          `
        });
        if (error) {
          console.error(error);
          return { success: false, error };
        }
        await resend.emails.send({
          from: "Leonardo Dillon <onboarding@resend.dev>",
          to: [email],
          subject: "Mail recibido",
          replyTo: [MI_GMAIL],
          html: `
            <div>
              <h1>Gracias por enviar un mail</h1>
              <p> En breve me pondre con contacto </p>
              <small> Saludos </small>
            </div>
          `
        });
        return { success: true, data };
      } catch (err) {
        console.error(err);
        return { success: false, error: "Error enviando el correo" };
      }
    }
  })
};

export { server };
