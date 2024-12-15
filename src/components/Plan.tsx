import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mdiMap } from "@mdi/js";
import Icon from "@mdi/react";

function Plan() {
  return (
    <Dialog>
      <DialogTrigger className="">
        <div
          className="w-[60px] h-[60px] flex items-center justify-center"
          id="step2"
        >
          <Icon path={mdiMap} size={1} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">MAP</DialogTitle>
          <DialogDescription className="w-[100%] max-w-[100vw]">
            <img className="w-[1000px]" src="/gh.png" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Plan;
