import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Pc from "./components/Pc";
import { PCV } from "@/config/display";
import { MenubarDemo } from "./components/Header";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function RootLayout({ children }: any) {
  return (
      <ContextMenu>
      <ContextMenuTrigger>
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
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuItem>Team</ContextMenuItem>
        <ContextMenuItem>Subscription</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>

  );
}
