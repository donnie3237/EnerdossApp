import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Icon from "@mdi/react";
import { mdiHome } from "@mdi/js";
import { NavLink } from "react-router-dom";

export function MenubarDemo() {
  return (
    <Menubar className="rounded-none  border-gray-300 border-x-0 border-y-[1px] dark:border-gray-800">
      <NavLink to="/new">
        <Icon
          path={mdiHome}
          size={1}
          className="dark:fill-none ml-2 mr-2"
        />
      </NavLink>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <NavLink to="/new">
            <MenubarItem>
              New Project <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
          <MenubarItem>
            Open project <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Database</MenubarTrigger>
        <MenubarContent>
          <NavLink to="/database/PV">
            <MenubarItem>
              PV module <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
          <NavLink to="/database/Inverter">
            <MenubarItem>
              Inverter <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
          <MenubarItem>
            DC wire <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <NavLink to="/database/map">
            <MenubarItem>
              GEO site <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            DC wire <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <NavLink to="/tools/atlas">
            <MenubarItem>
              Atlas <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
          <NavLink to="/tools/loss">
            <MenubarItem>
              Report <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
          </NavLink>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <NavLink to="/info">
          <MenubarTrigger>About</MenubarTrigger>
        </NavLink>
      </MenubarMenu>
    </Menubar>
  );
}
