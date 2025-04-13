// hooks/useTheme.ts
import { useEffect, useState } from "react";

export function useTheme() {
    const html = document.documentElement
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    useEffect(() => {
        html.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    html.setAttribute('data-theme', theme)

    return { theme, toggleTheme };
}
