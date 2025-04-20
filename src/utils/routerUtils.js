import { useLocation } from "react-router";
import { useMemo } from "react";

export const useLastPathSegment = () => {
    const { pathname } = useLocation();

    return useMemo(() => {
        const parts = pathname.split("/").filter(Boolean);
        return parts.at(-1); // equivalente ao último item
    }, [pathname]);
};