const products = [
  {
    id: 1,
    name: "Angle Grinder DSM08-100",
    brand: "Dong Cheng",
    price: "₹2,199",
    priceNote: "Best Price",
    specs: ["800W Powerful Motor", "13000 RPM Speed", "100mm Wheel Diameter", "Spindle Lock"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/VE/VR/ZX/170580003/dong-cheng-dsm08-100-angle-grinder-500x500.jpg",
    whatsappText: "Namaste, mujhe Dong Cheng DSM08-100 Angle Grinder chahiye"
  },
  {
    id: 2,
    name: "Angle Grinder DSM02-125B",
    brand: "Dong Cheng",
    price: "₹3,200",
    priceNote: "Best Price",
    specs: ["1200W High Performance", "11800 RPM Speed", "125mm (5\") Wheel", "Fixed Speed"],
    image: "https://5.imimg.com/data5/ANDROID/Default/2024/7/465845727/TC/YP/ZJ/219555077/product-jpeg-500x500.jpg",
    whatsappText: "Namaste, mujhe Dong Cheng DSM02-125B Angle Grinder chahiye"
  },
  {
    id: 3,
    name: "Marble Cutter DZE03-110",
    brand: "Dong Cheng",
    price: "₹2,500",
    priceNote: "Best Price",
    specs: ["1050W Power Input", "13300 RPM No-Load Speed", "110mm Blade Diameter", "34mm Max Depth"],
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/382611057/PN/QB/WV/184558591/dong-cheng-marble-cutter-dze03-110-500x500.jpg",
    whatsappText: "Namaste, mujhe Dong Cheng DZE03-110 Marble Cutter chahiye"
  },
  {
    id: 4,
    name: "Impact Drill DZJ02-13",
    brand: "Dong Cheng",
    price: "₹1,950",
    priceNote: "Best Price",
    specs: ["500W Motor", "0-2600 RPM Variable Speed", "13mm Chuck Size", "Forward/Reverse Rotation"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/WE/YZ/UG/110292946/dzj02-13-dong-cheng-electric-impact-drill-500x500.jpg",
    whatsappText: "Namaste, mujhe Dong Cheng DZJ02-13 Impact Drill chahiye"
  },
  {
    id: 5,
    name: "Electric Planer DMB82",
    brand: "Dong Cheng",
    price: "₹2,879",
    priceNote: "Best Price",
    specs: ["500W Power Consumption", "82mm Planing Width", "16000 RPM No-Load Speed", "Lightweight"],
    image: "https://5.imimg.com/data5/SELLER/Default/2021/2/GJ/EN/AM/119752840/dmb82-dong-cheng-electric-planer-500x500.jpg",
    whatsappText: "Namaste, mujhe Dong Cheng DMB82 Electric Planer chahiye"
  },
  {
    id: 6,
    name: "Electric Planer GC-H82P",
    brand: "Gaocheng",
    price: "₹2,430",
    priceNote: "Best Price",
    specs: ["710W Heavy Duty Motor", "15000 RPM Speed", "82mm Planing Width", "Aluminum Bed"],
    image: "https://5.imimg.com/data5/SELLER/Default/2023/1/OC/IB/OE/26683187/gaocheng-electric-planer-gc-h82p-500x500.jpg",
    whatsappText: "Namaste, mujhe Gaocheng GC-H82P Electric Planer chahiye"
  },
  {
    id: 7,
    name: "Marble Cutter CP-MC-125MB",
    brand: "Camron Pro",
    price: "₹3,470",
    priceNote: "Best Price",
    specs: ["1700W High Power", "12000 RPM Speed", "125mm Blade Diameter", "Heavy Duty"],
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/315617724/FO/LF/MR/137768273/camron-pro-marble-cutter-cp-mc-125mb-500x500.jpg",
    whatsappText: "Namaste, mujhe Camron Pro CP-MC-125MB Marble Cutter chahiye"
  },
  {
    id: 8,
    name: "Marble Cutter CP-MC-125WD",
    brand: "Camron Pro",
    price: "₹3,990",
    priceNote: "Best Price",
    specs: ["1700W Motor", "12000 RPM Speed", "125mm Blade Capacity", "45° Moving Base Plate"],
    image: "https://5.imimg.com/data5/SELLER/Default/2023/6/315617724/FO/LF/MR/137768273/camron-pro-marble-cutter-cp-mc-125mb-500x500.jpg", // Similar model image
    whatsappText: "Namaste, mujhe Camron Pro CP-MC-125WD Marble Cutter chahiye"
  },
  {
    id: 9,
    name: "Impact Drill DV 10VST",
    brand: "Hikoki",
    price: "₹2,339",
    priceNote: "Best Price",
    specs: ["550W Powerful Motor", "0-3000 RPM Speed", "10mm Chuck Size", "28 Pcs Tool Kit"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/9/UL/VP/ZJ/161297206/hikoki-dv-10vst-impact-drill-500x500.jpg",
    whatsappText: "Namaste, mujhe Hikoki DV 10VST Impact Drill chahiye"
  },
  {
    id: 10,
    name: "Demolition Hammer AE-0835",
    brand: "Avengers",
    price: "Price on Request",
    priceNote: "WhatsApp par puchein",
    specs: ["Heavy Duty Professional", "Long Life & High Quality", "Made for India", "Demolition Work"],
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/385514807/QU/UA/RB/144463416/demolition-hammer-500x500.jpg",
    whatsappText: "Namaste, mujhe Avengers AE-0835 Demolition Hammer ka price chahiye"
  },
  {
    id: 11,
    name: "Rotary Hammer SP-2-26RE",
    brand: "Spear",
    price: "Price on Request",
    priceNote: "WhatsApp par puchein",
    specs: ["2900 RPM Speed", "1100W Power", "3-Mode Operation", "Professional Grade"],
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/385508257/ZQ/IA/XD/144463416/spear-rotary-hammer-500x500.jpg",
    whatsappText: "Namaste, mujhe Spear SP-2-26RE Rotary Hammer ka price chahiye"
  },
  {
    id: 12,
    name: "Demolition Hammer SP-0810",
    brand: "Spear",
    price: "Price on Request",
    priceNote: "WhatsApp par puchein",
    specs: ["2900 RPM Speed", "1100W Power", "Heavy Duty Breaking", "Long Life Performance"],
    image: "https://5.imimg.com/data5/SELLER/Default/2024/2/385514807/QU/UA/RB/144463416/demolition-hammer-500x500.jpg",
    whatsappText: "Namaste, mujhe Spear SP-0810 Demolition Hammer ka price chahiye"
  }
];