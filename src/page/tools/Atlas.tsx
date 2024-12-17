import { getSolarData } from "@/config/api";
import { useEffect, useState } from "react";
import generatePDF, { Options } from "react-to-pdf";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


// Define the months
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function Atlas() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");
  const [solarData, setSolarData] = useState<any>();
  const [solarDataTotal, setSolarDataTotal] = useState<any>();
  const [isDownloading, setIsDownloading] = useState<boolean>(false); // สร้าง state เพื่อติดตามสถานะ
  const [error, setError] = useState("");
  const getTargetElement = () => document.getElementById("report");
  const options: Options = {
    filename: `${location}_environment.pdf`,
    page: {
      margin: 20,
    },
  };
  const downloadPdf = async () => {
    await setIsDownloading(true); // ตั้งค่า state เป็น true เมื่อเริ่มดาวน์โหลด
    setTimeout(() => {
      try {
        // เรียกฟังก์ชัน generatePDF
        generatePDF(getTargetElement, options);
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        setIsDownloading(false); // ตั้งค่า state เป็น false หลังดาวน์โหลดเสร็จ
      }
    }, 500);
  };

  async function fetchData() {
    if (!latitude || !longitude) {
      setError("กรุณากรอกทั้ง Latitude และ Longitude");
      return;
    }

    try {
      const jsonData = await getSolarData(latitude, longitude);
      const Monthly = jsonData.monthly.data;
      const Yearly = jsonData.annual.data;
      const monthlyData = months.map((month, index) => {
        return {
          month,
          TEMP: Monthly.TEMP[index],
          PVOUT_csi: Monthly.PVOUT_csi[index],
          DNI: Monthly.DNI[index],
          DIF: Monthly.DIF[index],
          GHI: Monthly.GHI[index],
          GTI_opta: Monthly.GTI_opta[index],
        };
      });      
      setSolarDataTotal(Yearly);
      setSolarData(monthlyData);
      // console.log(solarData)
      setError(""); // ลบข้อความ error เมื่อสำเร็จ
    } catch (err) {
      console.error("Error:", err);
      setError("ไม่สามารถดึงข้อมูลได้");
      setSolarData(null);
    }
  }

  return (
    <div className="w-[90%] mx-auto mt-[50px] pt-[20px]">
      <div className="flex justify items-center">
        <Input
          type="text"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="p-2 mr-2"
        />
        <Input
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="p-2 outline-none"
        />
        <Button
          onClick={fetchData}
          className="ml-4 px-[30px] w-[50px]"
        >
          Search
        </Button>
      </div>
      <div className="flex justify mt-2 items-center">
        <Input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 outline-none"
        />
        <Button
          onClick={downloadPdf}
          className="ml-4 px-[30px] w-[100px]"
          disabled={!solarData|| isDownloading}
        >
          Download
        </Button>
      </div>
      <div className={`${isDownloading ? "w-[1150px] mx-auto" : ""}`} id="report">
        <img src="/logo.png" className={`w-[150px] mx-auto ${isDownloading ? "" : "hidden"}`} />
        <h1 className={`text-6xl text-center font-bold pt-[30px] pb-[50px] ${isDownloading ? "" : "hidden"}`}>
          Environment Data
        </h1>
        <div className={`${isDownloading ? "lat flex ml-10 justify-center pb-4 font-semibold text-2xl" : "hidden"}`}>
          <p className="mx-4">Latitude : {parseFloat(latitude).toFixed(2)}</p>
          <p className="mx-4">Longitude : {parseFloat(longitude).toFixed(2)}</p>
        </div>
        <p className={`${isDownloading ? "lat flex ml-10 justify-center pb-4 font-semibold text-2xl" : "hidden"}`}>
          Location : {location}
        </p>
        <div className="flex gap-0 flex-col md:flex-row">
          <Card className="sm:w-full md:w-[calc(50%-16px)] m-2">
            <CardHeader>
              <CardTitle>Temperature</CardTitle>
              <CardDescription>
                Average temperature in 12 months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={solarData}
                  margin={{ top: 20 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="TEMP" fill="var(--color-desktop)" radius={2}>
                    <LabelList
                      position="top"
                      offset={12}
                      className="fill-foreground"
                      formatter={(value:number) => value.toFixed(2)}
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
              
            </CardContent>
          </Card>
          <Card className="sm:w-full md:w-[calc(50%-16px)] m-2">
            <CardHeader>
              <CardTitle>PV Output</CardTitle>
              <CardDescription>Power output from PV system</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart
                  accessibilityLayer
                  data={solarData}
                  margin={{ top: 20 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey="PVOUT_csi"
                    fill="hsl(var(--chart-5))"
                    radius={2}
                  >
                    <LabelList
                      position="top"
                      offset={12}
                      formatter={(value:number) => value.toFixed(2)}
                      className="fill-foreground"
                      fontSize={12}
                    />
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          {
            /* <Card className="sm:w-full md:w-[calc(50%-16px)] m-2">
    <CardHeader>
      <CardTitle>Irradiance</CardTitle>
      <CardDescription>Irradiance from sun to earth</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig2}>
        <BarChart accessibilityLayer data={solarData} margin={{ top: 20 }}>
          <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            stroke="hsl(var(--text-muted))"
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <Bar dataKey="DNI" fill="hsl(var(--chart-2))" radius={2} />
          <Bar dataKey="GHI" fill="hsl(var(--chart-3))" radius={2} />
          <Bar dataKey="DIF" fill="hsl(var(--chart-4))" radius={2} />
          <Bar dataKey="GTI_opta" fill="hsl(var(--chart-5))" radius={2} />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card> */
          }
        </div>

        <Table className="mt-[30px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Month</TableHead>
              <TableHead>PVOUT_csi (kWh/kWp)</TableHead>
              <TableHead>DNI (kWh/m2)</TableHead>
              <TableHead>GHI (kWh/m2)</TableHead>
              <TableHead>DIF (kWh/m2)</TableHead>
              <TableHead>GTI (kWh/m2)</TableHead>
              <TableHead className="text-right">Temp (°C)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {solarData && solarData.length > 0
              ? (
                solarData.map((data: any, index: any) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{data.month}</TableCell>
                    <TableCell>{data.PVOUT_csi.toFixed(2)}</TableCell>
                    <TableCell>{data.DNI.toFixed(2)}</TableCell>
                    <TableCell>{data.GHI.toFixed(2)}</TableCell>
                    <TableCell>{data.DIF.toFixed(2)}</TableCell>
                    <TableCell>{data.GTI_opta.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      {data.TEMP.toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))
              )
              : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No data available.
                  </TableCell>
                </TableRow>
              )}
          </TableBody>
          <TableFooter>
            {solarDataTotal
              ? (
                <TableRow>
                  <TableCell className="font-medium">Yearly</TableCell>
                  <TableCell>{solarDataTotal.PVOUT_csi.toFixed(2)}</TableCell>
                  <TableCell>{solarDataTotal.DNI.toFixed(2)}</TableCell>
                  <TableCell>{solarDataTotal.GHI.toFixed(2)}</TableCell>
                  <TableCell>{solarDataTotal.DIF.toFixed(2)}</TableCell>
                  <TableCell>{solarDataTotal.GTI_opta.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    {solarDataTotal.TEMP.toFixed(2)}
                  </TableCell>
                </TableRow>
              )
              : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No data available.
                  </TableCell>
                </TableRow>
              )}
          </TableFooter>
        </Table>
        <div className="w-full">
          <h1 className="text-center text-gray-600 font-bold py-6 pt-7 border-t-2 mt-16">
            Data source : Global solar atlas
          </h1>
        </div>
      </div>
      <div className="mb-6"></div>
    </div>
  );
}

export default Atlas;
