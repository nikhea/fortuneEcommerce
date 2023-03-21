import {
  PlusCircleIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  TruckIcon,
  TvIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";

export const categoriesRoutes = [
  {
    name: "health & Beauty",
    icon: <PlusCircleIcon />,
    subcategories: [
      {
        subName: "make up",
        subLinks: [
          "Concealers & Color Correctors",
          "Foundation",
          "Powder",
          "Lip Gloss",
          "Lip Liner",
          "Lipstick",
          "Eyeliner & Kajal",
          "Eyeshadow",
          "Mascara",
        ],
      },
      {
        subName: "hair care",
        subLinks: [
          "Hair & Scalp Care",
          "Hair Accessories",
          "Hair Cutting Tools",
          "Shampoo & Conditioner",
          "Wigs & Accessories",
        ],
      },
      {
        subName: "oral care",
        subLinks: [
          "Dental Care kits",
          "Dental Floss & Picks",
          "Teeth Whitening",
          "Toothbrushes",
          "Toothpaste",
          "Breath Freshners",
        ],
      },
    ],
  },
  {
    name: "phones & tablets",
    icon: <DeviceTabletIcon />,
    subcategories: [
      {
        subName: "MOBILE PHONES        ",
        subLinks: ["Smartphones", "Basic Phones", "Refurbished Phones"],
      },
      {
        subName: "MOBILE ACCESSORIES",
        subLinks: [
          "Accessory Kits",
          "Adapters",
          "Batteries",
          "Battery Chargers",
          "Bluetooth Headsets",
          "Cables",
          "Car Accessories",
          "Chargers",
          "Earphones & Headsets",
          "MicroSD Cards",
          "Screen Protectors",
          // "Selfie Sticks & Tripods",
          // "Smart Watches",
        ],
      },
      {
        subName: "TABLETS",
        subLinks: [
          "iPads",
          "Android Tablets",
          "Educational Tablets",
          "Tablet Accessories",
        ],
      },
    ],
  },
  {
    name: "computing",
    icon: <ComputerDesktopIcon />,
    subcategories: [
      {
        subName: "computers",
        subLinks: ["desktops", "laptops"],
      },
      {
        subName: "PRINTERS",
        subLinks: ["Inkjet Printers", "Laser Printers", "Printer Ink & Toner"],
      },
      {
        subName: "COMPUTER ACCESSORIES",
        subLinks: [
          "eyboards & Mice",
          "Uninterrupted Power Supply",
          "Memory Cards",
          "Batteries",
          "Scanners",
          "Video Projectors",
        ],
      },
    ],
  },
  {
    name: "fashion",
    icon: <PlusCircleIcon />,
    subcategories: [
      {
        subName: "WOMEN'S FASHION",
        subLinks: [
          "Clothing",
          "Shoes",
          "Accessories",
          "Jewelry",
          "Handbags & Wallets",
          "Underwear & Sleepwear",
          "Maternity",
          "Dresses",
          "Traditional",
          "Beach & Swimwear",
          "Flats",
        ],
      },
      {
        subName: "MEN'S FASHION",
        subLinks: [
          "Clothing",
          "Shoes",
          "Accessories",
          "Underwear & Sleepwear",
          "Traditional & Cultural Wear",
          "T-Shirts",
          " Polo Shirts",
          "Trousers & Chinos",
          "Sneakers",
          "Jewelry",
          "Jerseys",
        ],
      },
      {
        subName: "Watches",
        subLinks: ["Men's Watches", "Women's Watches"],
      },
    ],
  },
  {
    name: "automobile",
    icon: <TruckIcon />,
    subcategories: [
      {
        subName: "ELECTRONICS & ACCESSORIES",
        subLinks: ["Car Electronics", "Car Accessories", "Power & Battery"],
      },
      {
        subName: "CAR CARE",
        subLinks: ["Cleaning Kits", "Exterior Care", "Interior Care"],
      },
      {
        subName: "TYRE & RIMS",
        subLinks: ["Tyre", "Inflator & Guages"],
      },
    ],
  },
  {
    name: "funiture",
    icon: <ArrowsPointingInIcon />,
    subcategories: [
      {
        subName: "make up",
        subLinks: [
          "Concealers & Color Correctors",
          "Foundation",
          "Powder",
          "Lip Gloss",
          "Lip Liner",
          "Lipstick",
          "Eyeliner & Kajal",
          "Eyeshadow",
          "Mascara",
        ],
      },
      {
        subName: "hair care",
        subLinks: [
          "Hair & Scalp Care",
          "Hair Accessories",
          "Hair Cutting Tools",
          "Shampoo & Conditioner",
          "Wigs & Accessories",
        ],
      },
      {
        subName: "oral care",
        subLinks: [
          "Dental Care kits",
          "Dental Floss & Picks",
          "Teeth Whitening",
          "Toothbrushes",
          "Toothpaste",
          "Breath Freshners",
        ],
      },
    ],
  },
  {
    name: "eletronics",
    icon: <TvIcon />,
    subcategories: [
      {
        subName: "TELEVISION & VIDEO",
        subLinks: [
          "Televisions",
          "Smart TVs",
          "LED & LCD TVs",
          "QLED & OLED TVs",
          "DVD Players & Recorders",
        ],
      },
      {
        subName: "CAMERAS & PHOTOS",
        subLinks: [
          "Digital Cameras",
          "Projectors",
          "Video Surveillance",
          "Camcorders",
        ],
      },
      {
        subName: "GENERATORS & PORTABLE POWER",
        subLinks: [
          "Generators",
          "Power Inverters",
          "Solar & Wind Power",
          "Stablizers",
        ],
      },
    ],
  },
];

// export const categoriesData = [
//   {
//     name: "Living Room Furniture",
//     subcategories: [
//       "Sofas & Couches",
//       "Sectionals",
//       "Chairs",
//       "Coffee & Accent Tables",
//       "TV Stands & Entertainment Centers",
//       "Bookshelves & Cabinets",
//     ],
//   },
//   {
//     name: "Bedroom Furniture",
//     subcategories: [
//       "Beds",
//       "Dressers & Chests",
//       "Nightstands",
//       "Armoires & Wardrobes",
//       "Vanities",
//       "Bedroom Sets",
//     ],
//   },
//   {
//     name: "Dining Room Furniture",
//     subcategories: [
//       "Dining Tables",
//       "Dining Chairs",
//       "Buffets & Sideboards",
//       "Bar & Counter Stools",
//       "Dining Sets",
//     ],
//   },
//   {
//     name: "Home Office Furniture",
//     subcategories: [
//       "Desks",
//       "Office Chairs",
//       "Bookcases",
//       "File Cabinets",
//       "Office Sets",
//     ],
//   },
//   {
//     name: "Outdoor Furniture",
//     subcategories: [
//       "Patio Sets",
//       "Outdoor Seating",
//       "Outdoor Tables",
//       "Outdoor Dining",
//       "Outdoor Accessories",
//     ],
//   },
//   {
//     name: "Mattresses & Bedding",
//     subcategories: [
//       "Mattresses",
//       "Bedding Sets",
//       "Pillows",
//       "Mattress Toppers",
//       "Mattress Protectors",
//     ],
//   },
// ];
