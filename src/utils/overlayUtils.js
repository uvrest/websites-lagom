import { isValidRGBA, isValidHexColor, resolveThemeColor } from "./colorUtils";

/**
 * overlay pode ser:
 * - string: "rgba(...)" | "#rrggbb" | url | caminho local | "url(...)"
 * - objeto: {
 *     color,     // rgba(...) | #hex | 'primary' | etc (será resolvido)
 *     image,     // url string (sem 'url()'; o helper adiciona)
 *     opacity,   // 0..1 (se usar color sem alpha)
 *     blend,     // e.g. 'multiply', 'overlay', 'soft-light', 'normal'
 *     repeat,    // 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y'
 *     size,      // 'cover' | 'contain' | 'auto' | '64px 64px'
 *     position,  // 'center' | 'top left' | etc
 *     zIndex,    // default: 0 (fica atrás do conteúdo do Box)
 *   }
 */
export const buildOverlaySx = (overlay, theme) => {

    if (!overlay) return {};

    // Converte input simples em objeto
    let spec = {};

    if (typeof overlay === "string") {
        const s = overlay.trim();
        if (s.startsWith("url(") || /^https?:\/\//.test(s) || /\.(png|jpg|jpeg|webp|svg)$/i.test(s)) {
            spec.image = s.replace(/^url\((.*)\)$/, "$1");
        } else if (isValidRGBA(s) || isValidHexColor(s)) {
            spec.color = s;
        } else {
            // pode ser uma key de tema (ex: 'primaryDark') — tentamos resolver como cor
            spec.color = s;
        }
    } else if (typeof overlay === "object") {
        spec = { ...overlay };
    } else {
        return {};
    }

    // Defaults
    const blend = spec.blend || (spec.color && spec.image ? "multiply" : "normal");
    const repeat = spec.repeat ?? "repeat";
    const size = spec.size ?? "auto";
    const position = spec.position ?? "center";
    const zIndex = Number.isFinite(spec.zIndex) ? spec.zIndex : 0;

    // Cor resolvida (aceita token do tema)
    let color = spec.color;
    if (typeof color === "string" && !isValidRGBA(color) && !isValidHexColor(color)) {
        // tenta resolver via theme (ex: 'primary', 'paper', etc)
        color = resolveThemeColor(color, theme);
    }

    // Se veio #hex sem alpha + opacity, converte pra rgba
    const withOpacity = (hex, alpha) => {
        // hex #rgb ou #rrggbb
        const h = hex.replace("#", "");
        const isShort = h.length === 3;
        const r = parseInt(isShort ? h[0] + h[0] : h.slice(0, 2), 16);
        const g = parseInt(isShort ? h[1] + h[1] : h.slice(2, 4), 16);
        const b = parseInt(isShort ? h[2] + h[2] : h.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    if (color && isValidHexColor(color) && typeof spec.opacity === "number") {
        color = withOpacity(color, Math.max(0, Math.min(1, spec.opacity)));
    }

    // Monta background combinado para o ::before
    // Ordem: (cor, imagem) -> dá pra controlar com blend
    const bgImages = [];
    if (color) {
        // Usa linear-gradient como camada de cor sólida
        bgImages.push(`linear-gradient(${color}, ${color})`);
    }
    if (spec.image) {
        const url = spec.image.startsWith("url(") ? spec.image : `url(${spec.image})`;
        bgImages.push(url);
    }

    if (bgImages.length === 0) return {};

    const layersCount = bgImages.length;

    return {
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex,
            backgroundImage: bgImages.join(", "),
            backgroundRepeat: Array(layersCount).fill(repeat).join(", "),
            backgroundSize: Array(layersCount).fill(size).join(", "),
            backgroundPosition: Array(layersCount).fill(position).join(", "),
            // se houver cor + imagem, blend controla a fusão; com 1 layer, blend é irrelevante
            backgroundBlendMode: Array(layersCount).fill(blend).join(", "),
        },
    };
}