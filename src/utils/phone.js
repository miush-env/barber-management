import { parsePhoneNumberFromString } from "libphonenumber-js";

export const validatePhone = (value, defaultCountry = "AR") => {
  if (!value?.trim()) {
    return { valid: false, message: "Número requerido" };
  }

  const phone = parsePhoneNumberFromString(value, defaultCountry);

  if (!phone || !phone.isValid()) {
    return { valid: false, message: "Formato inválido" };
  }

  return {
    valid: true,
    formatted: phone.number,      // +54911...
    national: phone.formatNational(),
    country: phone.country,
    type: phone.getType?.()
  };
};