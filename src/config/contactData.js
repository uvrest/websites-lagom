const whatsappPhone = "(47) 99131-5699";
const whatsappLinkText = "Olá, gostaria de tirar algumas dúvidas a respeito dos serviços prestados pela Lagom.";

export const normalizePhone = (raw, defaultCountry = "55") => {
    if (!raw) return "";
    let d = String(raw).replace(/\D/g, ""); // só dígitos
    d = d.replace(/^0+/, "");               // remove zeros à esquerda
    if (!d.startsWith(defaultCountry)) d = defaultCountry + d; // BR por padrão
    return d;
};

export const buildWhatsAppLink = (phone, message) => {
    const num = normalizePhone(phone);
    const text = encodeURIComponent(message || "");
    return num ? `https://wa.me/${num}?text=${text}` : undefined;
};

export const whatsappInfo = {
    phone: whatsappPhone,
    normalizedPhone: normalizePhone(whatsappPhone),
    linkSrc: buildWhatsAppLink(whatsappPhone, whatsappLinkText),
    defaultMessage: whatsappLinkText,
}