import { mdiClose, mdiCropSquare, mdiMinus } from "@mdi/js";
import Icon from "@mdi/react";
import { appWindow } from "@tauri-apps/api/window";
import { ThemeToggle } from "./theme-toggle";

function Pc() {
  return (
    <div
      data-tauri-drag-region
      className="fixed top-0 mt-0 z-[999] h-[60px] w-[100vw] px-2 md:border-b-[0px] border-[#dadada] left-0  bg-[#ffffff] dark:bg-[#030712] dark:border-[#18202d] flex justify-between items-center cursor-grab"
    >
      <div className="flex items-center">
        <img src="/logo.png" className="h-[35px]" alt="" />
        <h1 className="font-bold text-2xl ml-2">Enerdoss</h1>
        <ThemeToggle />
      </div>
      <div className="z-[999] cursor-pointer h-[40px] md:border-b-[0px] border-[#dadada] left-0  bg-[#ffffff] dark:bg-[#030712] dark:border-[#18202d] flex justify-end items-center">
        <div onClick={() => appWindow.minimize()} className="mx-2">
          <Icon path={mdiMinus} size={0.8} />
        </div>
        <div onClick={() => appWindow.toggleMaximize()} className="mx-2">
          <Icon path={mdiCropSquare} size={0.8} />
        </div>
        <div onClick={() => appWindow.close()} className="mx-2">
          <Icon path={mdiClose} size={0.8} />
        </div>
      </div>
    </div>
  );
}

export default Pc;
