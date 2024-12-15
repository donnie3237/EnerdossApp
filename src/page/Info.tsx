import { ThemeToggle } from "@/components/theme-toggle";
import axios from "axios";
import Icon from "@mdi/react";
import { mdiRobotHappy } from "@mdi/js";
import { driver } from "driver.js";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PCV } from "@/config/display";
function Info() {
  const api = {
    socket: "https://cannabisgreenhousemju.iotmate.co",
    key:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI2N2MyMTdhNTQ2NTM0YjBlOGQ4MmE5NTJlMzI0ZWY2OCIsImlhdCI6MTcyMTI3OTYxMywiZXhwIjoyMDM2NjM5NjEzfQ.CdNtsmY-4qN15AZBtlg4Fd7UUIJqt_DqFQTQx_WFlLI",
  };
  const config = {
    headers: { Authorization: `Bearer ${api.key}` },
  };
  const [data, setData] = useState<any>([]);
  const [data2, setData2] = useState<any>([]);

  return (
    <div
      className={`flex flex-col justify-center w-[90%]  max-w-[480px] mx-auto  ${
        PCV ? "mt-[100px]" : ""
      }`}
    >
      <img src="logo.png" className="w-[200px] mx-auto" alt="" />
      <h1 className="mx-auto mt-5 text-5xl font-bold">
        ENERDOSS
      </h1>
      <div className="w-[100%] h-[150px] box mt-[30px] rounded-md">
        <h1 className="ml-5 mt-5 text-2xl font-bold text-white dark:text-white">
          Greenhouse.MJU
        </h1>
        <p className="ml-5 mt-0 text-sm text-bold text-white dark:text-white">
          version : {data2.version}
        </p>
        <p className="ml-5 mt-0 text-[10px] text-bold text-white dark:text-white">
          locale : {data2.time_zone}
        </p>
        <p className="ml-5 mt-0 text-[10px] text-bold text-white dark:text-white">
          lat : {data2.latitude}
        </p>
        <p className="ml-5 mt-0 text-[10px] text-bold text-white dark:text-white">
          long : {data2.longitude}
        </p>
      </div>
      <div className="flex mt-4 w-full">
        <div
          id="step4"
          className="w-[calc(50%-8px)] h-[120px] mr-4 rounded-sm bg-[rgba(0,0,0,0.2)]"
        >
          <div className="ml-1">
            <ThemeToggle />
          </div>
          <h2 className="ml-5 mt-[-10px] font-bold">Theme</h2>
        </div>
        <div className="w-[calc(50%-8px)] h-[120px] rounded-sm bg-[rgba(0,0,0,0.2)]">
          <Icon
            path={mdiRobotHappy}
            size={1}
            className="dark:fill-none mt-5 ml-5"
          />
          <h1 className="ml-5 mt-1 font-bold">Assistant</h1>
          <button className="bg-[rgba(0,0,0)] md:hidden text-white dark:bg-white dark:text-black px-5 text-[12px] mt-2  ml-5 rounded-sm flex items-center">
            Help
          </button>
        </div>
      </div>
      <div
        id="step5"
        className="w-[100%] bg-[rgba(0,0,0,0.2)] h-[100%] pb-5 mt-4 rounded-md"
      >
        <h1 className="ml-5 mt-4 font-bold">Deverloper</h1>
        <h2 className="ml-5 mt-4 text-sm">Download</h2>
        <div className="load text-sm flex flex-col ml-7">
          <a href="/app/gh.apk" download className="text-[12px] underline">
            Android(.apk)
          </a>
          <a href="" className="text-[12px] underline">Windows64bit(.msi)</a>
          <a href="" className="text-[12px] underline">Windows64bit(.exe)</a>
          <a href="" className="text-[12px] underline">darwin,Linux(.deb)</a>
        </div>
        <h2 className="ml-5 mt-4 text-sm">FULL API</h2>
        <h3 className="ml-7 mt-2 text-[12px]">
          https://cannabisgreenhousemju.iotmate.co/
        </h3>
        <h3 className="ml-7 mt-2 text-[12px]">Type : Websocket , RestfulAPI</h3>

        <h2 className="ml-5 mt-4 text-sm">HA-STATES</h2>
        <Table>
          <TableBody>
            {data.map((data: any) => (
              <TableRow key={data.entity_id}>
                <TableCell className="font-sm text-[10px] max-w-[300px]">
                  {data.entity_id}
                </TableCell>
                <TableCell className="text-right font-sm py-1 font-sm text-[10px]">
                  {data.state}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Info;
