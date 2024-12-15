import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
function AddPV() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button className="ml-2">
            Add
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="mt-[50px]">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                <Input />
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AddPV;
