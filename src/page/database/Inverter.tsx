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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Inverter() {
  return (
    <div className="mt-[120px]">
      <div className="fixed top-[100px] z-20 bg-background pb-10">
        <h1 className="text-4xl font-extrabold mx-auto text-center my-6">
          Inverter
        </h1>
        <div className="flex justify-center w-[90vw] mx-[5vw]">
          <Input className="w-[100%] mr-3" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
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
            <TableHead className="w-[100px]">Type</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">
                {invoice.invoice}
              </TableCell>
              <TableCell>Huawei</TableCell>
              <TableCell>on grid</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
