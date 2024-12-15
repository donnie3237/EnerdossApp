import { ThemeProvider } from "@/lib/Theme";
import { TailwindIndicator } from "@/lib/indicater";
import { ReactNode } from "react";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        {children}
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  );
}
