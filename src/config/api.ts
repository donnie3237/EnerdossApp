const GlobalSolar_URI = "https://api.globalsolaratlas.info/data/lta?loc=";
import axios from "axios";

// สร้าง instance ของ axios
export const APi1 = axios.create({
  baseURL: GlobalSolar_URI,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ฟังก์ชันรับ lat และ long เพื่อเรียก API
export const getSolarData = async (lat: string, long: string) => {
  try {
    // สร้าง URL ที่มี lat, long
    const url = `${GlobalSolar_URI}${lat},${long}`;
    const response = await APi1.get(url);
    return response.data; // คืนค่าข้อมูลที่ได้จาก API
  } catch (error) {
    console.error("Error fetching solar data:", error);
    throw error;
  }
};
