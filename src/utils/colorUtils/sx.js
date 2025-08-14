import { resolveThemeColor } from "./core";

export const bgFromTheme = (background) => (theme) => ({
    backgroundColor: resolveThemeColor(background, theme),
});