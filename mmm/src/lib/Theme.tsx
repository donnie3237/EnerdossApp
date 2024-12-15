import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <a
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Toggle theme
    </a>
  );
}
