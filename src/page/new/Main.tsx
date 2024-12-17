import { getSolarData } from "@/config/api";

function Main() {
  async function Hello() {
    const lat = "13.7563"; // ละติจูด
    const long = "100.5018"; // ลองจิจูด

    try {
      const solarData = await getSolarData(lat, long);
      console.log("Solar Data:", solarData);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <div className="w-[90%] mx-auto mt-[50px] border-primary border-[2px] border-dashed">
        <h1 className="py-[100px] mx-auto text-center font-bold w-full">
          Grid Tie system
        </h1>
      </div>
      <div className="w-[90%] mx-auto mt-[50px] border-primary border-[2px] border-dashed">
        <h1 className="py-[100px] mx-auto text-center font-bold w-full">
          Grid Tie system
        </h1>
      </div>
      <div className="w-[90%] mx-auto mt-[50px] border-primary border-[2px] border-dashed">
        <h1 className="py-[100px] mx-auto text-center font-bold w-full">
          Grid Tie system
        </h1>
      </div>
    </div>
  );
}

export default Main;
