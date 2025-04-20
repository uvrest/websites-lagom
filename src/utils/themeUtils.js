/**
 * Retorna a melhor cor de texto com contraste suficiente para um background.
 * Ideal para usar com cores do theme (ex: theme.palette.primary.main).
 * 
 * @param {Theme} theme - O tema atual (via sx callback ou hook)
 * @param {string} bgColor - A cor de fundo (hex, rgba, ou palette)
 * @returns {string} - Cor de texto com contraste adequado (ex: '#fff' ou '#000')
 */
export const getContrastTextFor = (theme, bgColor) => {
    return theme.palette.getContrastText(bgColor);
};
