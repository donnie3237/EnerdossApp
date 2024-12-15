const jsonData = {
  "annual": {
    "metadata": {
      "ts": 1734008630107,
      "version": {
        "data": "1.3",
        "modules": {
          "@solargis/prospect-service": "9.8.0",
        },
      },
      "layers": {
        "PVOUT_csi": {
          "method": "PV simulation model",
          "period": {
            "from": "satregion",
            "to": "2022",
          },
          "sources": [
            "GHI, DNI, TEMP, OPTA, ALBEDO, ELE (Solargis)",
          ],
          "updated": "2023-04-01",
          "version": "2.2.26",
          "unit": "kWh/kWp",
        },
        "DNI": {
          "method": "Solar model",
          "period": {
            "from": "satregion",
            "to": "2022",
          },
          "sources": [
            "Solargis solar model (Solargis)",
          ],
          "updated": "2023-04-01",
          "version": "2.2.26",
          "unit": "kWh/m2",
        },
        "GHI": {
          "method": "Solar model",
          "period": {
            "from": "satregion",
            "to": "2022",
          },
          "sources": [
            "Solargis solar model (Solargis)",
          ],
          "updated": "2023-04-01",
          "version": "2.2.26",
          "unit": "kWh/m2",
        },
        "DIF": {
          "method": "Solar model",
          "period": {
            "from": "satregion",
            "to": "2022",
          },
          "sources": [
            "Solargis solar model (Solargis)",
          ],
          "updated": "2023-04-01",
          "version": "2.2.26",
          "unit": "kWh/m2",
        },
        "GTI_opta": {
          "method": "Solar model",
          "period": {
            "from": "satregion",
            "to": "2021",
          },
          "sources": [
            "DNI, GHI, OPTA, ALBEDO, ELE (Solargis)",
          ],
          "updated": "2022-04-01",
          "version": "2.2.26",
          "unit": "kWh/m2",
        },
        "OPTA": {
          "method": "PV simulation model",
          "period": {
            "from": "satregion",
            "to": "2022",
          },
          "sources": [
            "GHI, DNI, ALBEDO (Solargis)",
          ],
          "updated": "2023-04-01",
          "version": "2.2.26",
          "unit": "°",
        },
        "TEMP": {
          "method": "Data processing",
          "period": {
            "from": "1994",
            "to": "2022",
          },
          "sources": [
            "ERA (ECMWF)",
          ],
          "updated": "2023-01-20",
          "version": "2.2.23",
          "unit": "°C",
        },
      },
    },
    "data": {
      "PVOUT_csi": 1571.125244140625,
      "DNI": 1435.03125,
      "GHI": 1942.578125,
      "DIF": 899.4921875,
      "GTI_opta": 2011.0390625,
      "OPTA": 17,
      "TEMP": 28.0625,
    },
  },
  "monthly": {
    "metadata": {
      "ts": 1734008630107,
      "version": {
        "data": "1.3",
        "modules": {
          "@solargis/prospect-service": "9.8.0",
        },
      },
    },
    "data": {
      "TEMP": [
        26.1875,
        28.125,
        29.9375,
        30.8125,
        29.625,
        29.125,
        28.5,
        28.125,
        27.3125,
        26.8125,
        26.5625,
        25.625,
      ],
      "PVOUT_csi": [
        141.73199462890625,
        134.7242431640625,
        147.09503173828125,
        142.3499755859375,
        134.10601806640625,
        119.9100341796875,
        115.5059814453125,
        115.94000244140625,
        117.21002197265625,
        125.9219970703125,
        134.34002685546875,
        142.2900390625,
      ],
      "DNI": [
        146.1640625,
        121.2734375,
        125.2109375,
        132.2421875,
        131.0703125,
        115.828125,
        95.6953125,
        87.640625,
        89.7578125,
        102.265625,
        136.2578125,
        151.6171875,
      ],
      "DIF": [
        63.3984375,
        72.7734375,
        88.1328125,
        84.1484375,
        80.4140625,
        76.3515625,
        82.1171875,
        81.75,
        76.140625,
        73.96875,
        60.6875,
        59.609375,
      ],
      "GHI": [
        154.8125,
        156.953125,
        184.015625,
        189.03125,
        184.140625,
        167.28125,
        158.1640625,
        152.953125,
        146.609375,
        148.5234375,
        148.3828125,
        151.7109375,
      ],
      "GTI_opta": [
        180.015625,
        173.3671875,
        191.703125,
        186.2734375,
        173.1640625,
        153.9609375,
        147.46875,
        147.71875,
        148.7109375,
        159.3125,
        169.859375,
        179.4921875,
      ],
    },
  },
};

// Extract metadata and monthly data
const { metadata, data } = jsonData.monthly;

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

// Transform data into monthly structure
const monthlyData = months.map((month, index) => {
  return {
    month,
    TEMP: data.TEMP[index],
    PVOUT_csi: data.PVOUT_csi[index],
    DNI: data.DNI[index],
    DIF: data.DIF[index],
    GHI: data.GHI[index],
    GTI_opta: data.GTI_opta[index],
  };
});

// Log the result
console.log(monthlyData);
