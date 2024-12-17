export type InverterType = {
    brand: string;    // Brand of the inverter
    pnom: string;     // Nominal power (e.g., "2kW")
    type: string;     // Type of inverter (e.g., "On grid 1ph")
    model: string;    // Model of the inverter
    eff: number;      // Efficiency in percentage
    string: number;   // Number of strings
  };
  
  export const InverterData: InverterType[] = [
    {
      brand: "Huawei",
      pnom: "2kW",
      type: "On grid 1ph",
      model: "SUN2000-2KTL-L1",
      eff: 98.2,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "3kW",
      type: "On grid 1ph",
      model: "SUN2000-3KTL-L1",
      eff: 98.3,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "4kW",
      type: "On grid 1ph",
      model: "SUN2000-4KTL-L1",
      eff: 98.4,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "5kW",
      type: "On grid 1ph",
      model: "SUN2000-5KTL-L1",
      eff: 98.4,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "8kW",
      type: "On grid 1ph",
      model: "SUN2000-8K-LC0",
      eff: 98.1,
      string: 3,
    },
    {
      brand: "Huawei",
      pnom: "10kW",
      type: "On grid 1ph",
      model: "SUN2000-10K-LC0",
      eff: 98.1,
      string: 3,
    },
    {
      brand: "Huawei",
      pnom: "5kW",
      type: "On grid 3ph",
      model: "SUN2000-5KTL-M1",
      eff: 98.4,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "8kW",
      type: "On grid 3ph",
      model: "SUN2000-8KTL-M1",
      eff: 98.6,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "10kW",
      type: "On grid 3ph",
      model: "SUN2000-10KTL-M1",
      eff: 98.6,
      string: 2,
    },
    {
      brand: "Huawei",
      pnom: "12kW",
      type: "On grid 3ph",
      model: "SUN2000-12K-MB0",
      eff: 98.4,
      string: 4,
    },
    {
      brand: "Huawei",
      pnom: "12kW",
      type: "On grid 3ph",
      model: "SUN2000-12K-MB0",
      eff: 98.4,
      string: 4,
    },
    {
      brand: "Huawei",
      pnom: "15kW",
      type: "On grid 3ph",
      model: "SUN2000-15K-MB0",
      eff: 98.4,
      string: 4,
    },
    {
      brand: "Huawei",
      pnom: "17kW",
      type: "On grid 3ph",
      model: "SUN2000-17K-MB0",
      eff: 98.4,
      string: 4,
    },
    {
      brand: "Huawei",
      pnom: "20kW",
      type: "On grid 3ph",
      model: "SUN2000-20K-MB0",
      eff: 98.4,
      string: 4,
    },
    {
      brand: "Huawei",
      pnom: "25kW",
      type: "On grid 3ph",
      model: "SUN2000-25K-MB0",
      eff: 98.4,
      string: 4,
    },
  ];
  