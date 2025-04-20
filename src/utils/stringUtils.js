export const unslugify = (slug) => {
    if (!slug) return "";

    return slug
        .replace(/-/g, " ") // troca "-" por espaço
        .replace(/\b\w/g, (char) => char.toUpperCase()); // capitaliza primeira letra de cada palavra
};