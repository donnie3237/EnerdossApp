import Yo from "@/components/yo";
import "./dose.css";

function Map(data: any) {
  const hu_outdoor: any = data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_humidity"
      ]
    ? data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_humidity"
      ].state
    : "loading";
  const tmp_outdoor: any = data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_feels_like"
      ]
    ? data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_feels_like"
      ].state
    : "loading";
  const tmp_02: any =
    data.data["sensor.temperature_electric_quantity_controller_3_temperature"]
      ? data
        .data["sensor.temperature_electric_quantity_controller_3_temperature"]
        .state
      : "loading";
  const tmp_03: any =
    data.data["sensor.temperature_electric_quantity_controller_2_temperature"]
      ? data
        .data["sensor.temperature_electric_quantity_controller_2_temperature"]
        .state
      : "loading";
  const tmp_04: any = data.data["sensor.temp_in_door_4_temperature"]
    ? data.data["sensor.temp_in_door_4_temperature"].state
    : "loading";
  const tmp_05: any =
    data.data["sensor.temperature_electric_quantity_controller_temperature"]
      ? data.data["sensor.temperature_electric_quantity_controller_temperature"]
        .state
      : "loading";
  const tmp_06: any =
    data.data["sensor.temperature_electric_quantity_controller_4_temperature"]
      ? data
        .data["sensor.temperature_electric_quantity_controller_4_temperature"]
        .state
      : "loading";
  const hu_02: any =
    data.data["sensor.temperature_electric_quantity_controller_3_humidity"]
      ? data.data["sensor.temperature_electric_quantity_controller_3_humidity"]
        .state
      : "loading";
  const hu_03: any =
    data.data["sensor.temperature_electric_quantity_controller_2_humidity"]
      ? data.data["sensor.temperature_electric_quantity_controller_2_humidity"]
        .state
      : "loading";
  const hu_04: any = data.data["sensor.temp_in_door_4_humidity"]
    ? data.data["sensor.temp_in_door_4_humidity"].state
    : "loading";
  const hu_05: any =
    data.data["sensor.temperature_electric_quantity_controller_humidity"]
      ? data.data["sensor.temperature_electric_quantity_controller_humidity"]
        .state
      : "loading";
  const hu_06: any =
    data.data["sensor.temperature_electric_quantity_controller_4_humidity"]
      ? data.data["sensor.temperature_electric_quantity_controller_4_humidity"]
        .state
      : "loading";
  const li_out: any = data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_illuminance"
      ]
    ? data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_illuminance"
      ].state
    : "loading";
  const li_in: any = data
      .data[
        "sensor.rks_weather_station_pro_c20ec4_golf1_rks_weather_illuminance"
      ]
    ? data
      .data[
        "sensor.rks_weather_station_pro_c20ec4_golf1_rks_weather_illuminance"
      ].state
    : "loading";
  const wi_out: any = data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_wind_speed"
      ]
    ? data
      .data[
        "sensor.rks_weather_station_pro_c1fb2c_golf2_rks_weather_wind_speed"
      ].state
    : "loading";
  const tp_l1: any = data.data["sensor.rockuenergye3_energy_power_0_2"]
    ? data.data["sensor.rockuenergye3_energy_power_0_2"].state
    : "loading";
  const tp_l2: any = data.data["sensor.rockuenergye3_energy_power_1_2"]
    ? data.data["sensor.rockuenergye3_energy_power_1_2"].state
    : "loading";
  const tp_l3: any = data.data["sensor.rockuenergye3_energy_power_2_2"]
    ? data.data["sensor.rockuenergye3_energy_power_2_2"].state
    : "loading";
  const tv_l1: any = data.data["sensor.rockuenergye3_energy_voltage_0_2"]
    ? data.data["sensor.rockuenergye3_energy_voltage_0_2"].state
    : "loading";
  const tv_l2: any = data.data["sensor.rockuenergye3_energy_voltage_1_2"]
    ? data.data["sensor.rockuenergye3_energy_voltage_1_2"].state
    : "loading";
  const tv_l3: any = data.data["sensor.rockuenergye3_energy_voltage_2_2"]
    ? data.data["sensor.rockuenergye3_energy_voltage_2_2"].state
    : "loading";
  const ti_l1: any = data.data["sensor.rockuenergye3_energy_current_0_2"]
    ? data.data["sensor.rockuenergye3_energy_current_0_2"].state
    : "loading";
  const ti_l2: any = data.data["sensor.rockuenergye3_energy_current_1_2"]
    ? data.data["sensor.rockuenergye3_energy_current_1_2"].state
    : "loading";
  const ti_l3: any = data.data["sensor.rockuenergye3_energy_current_2_2"]
    ? data.data["sensor.rockuenergye3_energy_current_2_2"].state
    : "loading";
  const pp_l1: any = data.data["sensor.rockuenergye3_energy_power_0"]
    ? data.data["sensor.rockuenergye3_energy_power_0"].state
    : "loading";
  const pp_l2: any = data.data["sensor.rockuenergye3_energy_power_1"]
    ? data.data["sensor.rockuenergye3_energy_power_1"].state
    : "loading";
  const pp_l3: any = data.data["sensor.rockuenergye3_energy_power_2"]
    ? data.data["sensor.rockuenergye3_energy_power_2"].state
    : "loading";
  const pi_l1: any = data.data["sensor.rockuenergye3_energy_current_0"]
    ? data.data["sensor.rockuenergye3_energy_current_0"].state
    : "loading";
  const pi_l2: any = data.data["sensor.rockuenergye3_energy_current_1"]
    ? data.data["sensor.rockuenergye3_energy_current_1"].state
    : "loading";
  const pi_l3: any = data.data["sensor.rockuenergye3_energy_current_2"]
    ? data.data["sensor.rockuenergye3_energy_current_2"].state
    : "loading";
  const pv_l1: any = data.data["sensor.rockuenergye3_energy_voltage_0"]
    ? data.data["sensor.rockuenergye3_energy_voltage_0"].state
    : "loading";
  const pv_l2: any = data.data["sensor.rockuenergye3_energy_voltage_1"]
    ? data.data["sensor.rockuenergye3_energy_voltage_1"].state
    : "loading";
  const pv_l3: any = data.data["sensor.rockuenergye3_energy_voltage_2"]
    ? data.data["sensor.rockuenergye3_energy_voltage_2"].state
    : "loading";
  const lc_01: any = data.data["sensor.led_1_current"]
    ? data.data["sensor.led_1_current"].state
    : "loading";
  const lc_02: any = data.data["sensor.led_2_current"]
    ? data.data["sensor.led_2_current"].state
    : "loading";
  const lc_03: any = data.data["sensor.led_3_current"]
    ? data.data["sensor.led_3_current"].state
    : "loading";
  const lv_01: any = data.data["sensor.led_1_voltage"]
    ? data.data["sensor.led_1_voltage"].state
    : "loading";
  const lv_02: any = data.data["sensor.led_2_voltage"]
    ? data.data["sensor.led_2_voltage"].state
    : "loading";
  const lv_03: any = data.data["sensor.led_3_voltage"]
    ? data.data["sensor.led_3_voltage"].state
    : "loading";
  const lp_01: any = data.data["sensor.led_1_power"]
    ? data.data["sensor.led_1_power"].state
    : "loading";
  const lp_02: any = data.data["sensor.led_2_power"]
    ? data.data["sensor.led_2_power"].state
    : "loading";
  const lp_03: any = data.data["sensor.led_3_power"]
    ? data.data["sensor.led_3_power"].state
    : "loading";
  function ToF(celcius: number) {
    const F = (celcius * 1.8) + 32;
    return F.toFixed(2);
  }
  return (
    <>
      <div className="relative  w-[100%]">
        <img className="z-1 object-cover" src="/nu.png" alt="" />

        <div className="absolute top-[7%] left-[4%] text-[1.7vw] z-[2] flex flex-col">
          <h1 className="text-black">INTENSITY : {li_out} lux</h1>
          <h1 className="text-black">HUMIDITY : {hu_outdoor} %</h1>
          <h1 className="text-black">TEMP : {tmp_outdoor} ํC</h1>
          <h1 className="text-black">WIND SPEED : {wi_out} km/h</h1>
        </div>
        <div className="absolute top-[28%] left-[4%] text-[1.7vw] z-[2] flex flex-col">
          <h1 className="text-black">L1 : {tv_l1} V {ti_l1} A {tp_l1} W</h1>
          <h1 className="text-black">L2 : {tv_l2} V {ti_l2} A {tp_l2} W</h1>
          <h1 className="text-black">L3 : {tv_l3} V {ti_l3} A {tp_l3} W</h1>
        </div>
        <div className="absolute top-[47%] left-[4%] text-[1.7vw] z-[2] flex flex-col">
          <h1 className="text-black">L1 : {pv_l1} V {pi_l1} A {pp_l1} W</h1>
          <h1 className="text-black">L2 : {pv_l2} V {pi_l2} A {pp_l2} W</h1>
          <h1 className="text-black">L3 : {pv_l3} V {pi_l3} A {pp_l3} W</h1>
        </div>
        <div className="absolute top-[21%] left-[calc(45%+3px)] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">TEMP : {tmp_06} ํC</h1>
          <h1 className="text-black">TEMP : {(tmp_06 * 1.8) + 32} F</h1>
          <h1 className="text-black">HUMIDITY : {hu_06} %</h1>
        </div>
        <div className="absolute top-[69%] left-[calc(45%+2px)] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">TEMP : {tmp_02} ํC</h1>
          <h1 className="text-black">TEMP : {ToF(tmp_02)} F</h1>
          <h1 className="text-black">HUMIDITY : {hu_02} %</h1>
        </div>
        <div className="absolute top-[36%] left-[30%] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">TEMP : {tmp_05} ํC</h1>
          <h1 className="text-black">TEMP : {ToF(tmp_05)} ํC</h1>
          <h1 className="text-black">HUMIDITY : {hu_05} %</h1>
        </div>
        <div className="absolute top-[36%] left-[60%] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">TEMP : {tmp_03} ํC</h1>
          <h1 className="text-black">TEMP : {ToF(tmp_03)} F</h1>
          <h1 className="text-black">HUMIDITY : {hu_03} %</h1>
        </div>
        <div className="absolute top-[35%] left-[44%] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">INTENSITY : {li_in} lux</h1>
          <h1 className="text-black">TEMP : {tmp_04} ํC</h1>
          <h1 className="text-black">TEMP : {ToF(tmp_04)} F</h1>
          <h1 className="text-black">HUMIDITY : {hu_04} %</h1>
        </div>
        <div className="absolute top-[58%] left-[55%] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">Voltage : {lv_01} V</h1>
          <h1 className="text-black">Current : {lc_01} A</h1>
          <h1 className="text-black">POWER : {lp_01} W</h1>
        </div>
        <div className="absolute top-[58%] left-[45%] text-[1vw] z-[2] flex flex-col">
          <h1 className="text-black">Voltage : {lv_02} V</h1>
          <h1 className="text-black">Current : {lc_02} A</h1>
          <h1 className="text-black">POWER : {lp_02} W</h1>
        </div>
        <div className="absolute top-[58%] left-[35%] text-[1vw] z-[2] flex flex-col">
          <h1 className=" text-black">Voltage : {lv_03} V</h1>
          <h1 className="text-black">Current : {lc_03} A</h1>
          <h1 className="text-black">POWER : {lp_03} W</h1>
        </div>
        <div className="absolute top-[38%] left-[74%] text-[1.6vw] z-[2] flex flex-col">
          <h1 className=" text-black">
            TOTAL POWER : {parseInt(tp_l1) + parseInt(tp_l2) + parseInt(tp_l3)}
            {" "}
            W
          </h1>
          <h1 className=" text-black">
            TOTAL PUMP POWER :{" "}
            {parseInt(pp_l1) + parseInt(pp_l2) + parseInt(pp_l3)} W
          </h1>
          <h1 className=" text-black">
            TOTAL LED POWER :{" "}
            {parseInt(lp_01) + parseInt(lp_02) + parseInt(lp_03)} W
          </h1>
          <h1 className="text-black">AVG TEMP INDOOR : {} C</h1>
          <h1 className="text-black">DELTA INTENSITY : {li_out - li_in} lux</h1>
        </div>
      </div>
      <Yo data={data} />
    </>
  );
}

export default Map;
