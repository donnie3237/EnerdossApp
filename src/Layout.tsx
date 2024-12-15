import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Pc from "./components/Pc";
import { PCV } from "@/config/display";
import { MenubarDemo } from "./components/Header";
export default function RootLayout({ children }: any) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {PCV ? <Pc /> : ""}
        <div className="w-[100vw] fixed top-[60px] z-50">
          <MenubarDemo />
        </div>
        <div className="mt-[100px]">
          <div className="md:mb-0">{children}</div>
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  );
}
