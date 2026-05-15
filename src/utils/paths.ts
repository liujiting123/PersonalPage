export function withBase(path: string): string {
    const base = import.meta.env.BASE_URL || "/";
    const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;

    if (!normalizedBase) return normalizedPath;
    if (normalizedBase === "") return normalizedPath;
    if (normalizedBase === "/") return normalizedPath;

    return `${normalizedBase}${normalizedPath}`;
}

export function stripBase(pathname: string): string {
    const base = import.meta.env.BASE_URL || "/";
    const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

    if (!normalizedBase || normalizedBase === "/") return pathname;
    if (pathname === normalizedBase) return "/";
    if (pathname.startsWith(`${normalizedBase}/`)) {
        return pathname.slice(normalizedBase.length);
    }

    return pathname;
}
