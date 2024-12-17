import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import AddPV from "./AddPV";
import { InverterData } from "./Source.ts";

export default function Inverter() {
  return (
    <div className="my-[120px]">
      <div className="fixed top-[100px] z-20 bg-background pb-10">
        <h1 className="text-4xl font-extrabold mx-auto text-center my-6">
          Inverter
        </h1>
        <div className="flex justify-center w-[90vw] mx-[5vw]">
          <Input className="w-[100%] mr-3" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Huawei</SelectItem>
                <SelectItem value="banana">Sungrow</SelectItem>
                <SelectItem value="blueberry">Solar edge</SelectItem>
                <SelectItem value="grapes">Inphase</SelectItem>
                <SelectItem value="pineapple">SMA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AddPV />
        </div>
      </div>
      <Table className="w-[90vw] mt-[150px] ml-[5vw]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Brand</TableHead>
            <TableHead className="w-[100px]">Pnom.</TableHead>
            <TableHead className="w-[150px]">Type</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {InverterData.map((data) => (
            <TableRow key={data.model}>
              <TableCell className="font-medium">
                {data.brand}
              </TableCell>
              <TableCell>{data.pnom}</TableCell>
              <TableCell>{data.type}</TableCell>
              <TableCell>{data.model}</TableCell>
              <TableCell className="text-right">
                soon
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
