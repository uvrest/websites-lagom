export const isValidHexColor = (colorString) => {
    if (typeof colorString !== 'string') return false;
    // #RGB ou #RRGGBB
    const hexRegex = /^#(?:[0-9A-F]{3}){1,2}$/i;
    return hexRegex.test(colorString);
};

export const isValidRGBA = (colorString) => {
    if (typeof colorString !== 'string') return false;

    // rgba(255, 0, 0, 0.5) | rgba(255,0,0,.5) | espaços opcionais
    const rgbaRegex =
        /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*((?:0?\.\d+)|(?:1(?:\.0+)?)|0)\s*\)$/i;

    const match = colorString.match(rgbaRegex);
    if (!match) return false;

    const r = parseInt(match[1], 10);
    const g = parseInt(match[2], 10);
    const b = parseInt(match[3], 10);
    const a = parseFloat(match[4]);

    if (r < 0 || r > 255) return false;
    if (g < 0 || g > 255) return false;
    if (b < 0 || b > 255) return false;
    if (a < 0 || a > 1) return false;

    return true;
};

// Versão pura: recebe o theme de fora
export const resolveThemeColor = (background, theme) => {

    const colorMap = {
        white: theme?.palette?.common?.white,
        black: theme?.palette?.common?.black,
        paper: theme?.palette?.background?.paper,
        default: theme?.palette?.background?.default,
        primary: theme?.palette?.primary?.main,
        primaryLight: theme?.palette?.primary?.light,
        primaryDark: theme?.palette?.primary?.dark,
        secondary: theme?.palette?.secondary?.main,
        secondaryLight: theme?.palette?.secondary?.light,
        secondaryDark: theme?.palette?.secondary?.dark,
        customDarkGreen: theme?.custom?.color?.darkGreen,
    };

    let outputColor = colorMap.paper ?? '#fff';

    if (typeof background === 'string') {
        if (Object.prototype.hasOwnProperty.call(colorMap, background) && colorMap[background]) {
            outputColor = colorMap[background];
        } else if (isValidHexColor(background) || isValidRGBA(background)) {
            outputColor = background;
        }
    }

    return outputColor;
};