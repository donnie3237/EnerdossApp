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

export default function TableDemo() {
  return (
    <div className="mt-[0px]">
      <div className="sticky top-[100px] z-20 bg-background pt-2 pb-4">
        <h1 className="text-4xl font-extrabold mx-auto text-center my-6">
          PV module
        </h1>
        <div className="flex justify-center w-[90vw] mx-[5vw]">
          <Input className="w-[100%] mr-3" />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="jinko">Jinko</SelectItem>
                <SelectItem value="ja">JA</SelectItem>
                <SelectItem value="longi">Longi</SelectItem>
                <SelectItem value="tina">Tina</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AddPV />
        </div>
      </div>
      <Table className="w-[90vw] mt-[20px] ml-[5vw] h-[50px]">
        <TableHeader className="">
          <TableRow>
            <TableHead className="w-[50px]">Brand</TableHead>
            <TableHead className="w-[100px]">Pnom.</TableHead>
            <TableHead>Technology</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">
                Jinko
              </TableCell>
              <TableCell>620W</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
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
