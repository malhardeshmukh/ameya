export interface CompanyProfile {
  name: string;
  legalStatus: string;
  ceo: string;
  partners: string[];
  gstin: string;
  iec: string;
  phone: string;
  formattedPhone: string;
  email: string;
  registeredAddress: {
    line1: string;
    line2: string;
    landmark: string;
    highway: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    full: string;
  };
  establishmentYear: number;
  natureOfBusiness: string[];
  annualTurnover: string;
  totalEmployees: string;
  banker: string;
  paymentModes: string[];
  shipmentModes: string[];
  topExportCountries: { country: string; flag: string; region: string }[];
  exportPercentage: string;
  responseRate: string;
  rating: {
    score: number;
    maxScore: number;
    totalReviews: number;
    breakdown: { stars: number; count: number }[];
  };
  certifications: string[];
}

export const COMPANY_DATA: CompanyProfile = {
  name: "Ameyaa Industries",
  legalStatus: "Partnership Firm",
  ceo: "Jaya Nair",
  partners: [
    "Jaychitra Murali Nair",
    "Aravindan Puthoor Nair",
    "Joy Pappan Kannuketiyil"
  ],
  gstin: "24ACAFA0567E1ZY",
  iec: "ACAFA0567E",
  phone: "+917942784628",
  formattedPhone: "+91 79427 84628",
  email: "sales@ameyaaindustries.co.in",
  registeredAddress: {
    line1: "9, D/901, Ganesh Glory-II",
    line2: "Jagatpur Chenpur Road",
    landmark: "Near BSNL Office",
    highway: "S.G. Highway",
    city: "Ahmedabad",
    pincode: "382470",
    state: "Gujarat",
    country: "India",
    full: "9, D/901, Ganesh Glory-II, Jagatpur Chenpur Road, Nr. BSNL Office, S.G. Highway, Ahmedabad - 382470, Gujarat, India"
  },
  establishmentYear: 2023,
  natureOfBusiness: [
    "Chemical Manufacturer",
    "Global Exporter",
    "Industrial Wholesaler",
    "Raw Materials Importer"
  ],
  annualTurnover: "₹ 40 Lakh - 1.50 Crore",
  totalEmployees: "Up to 10 Specialized Professionals",
  banker: "Dhanlaxmi Bank Ltd",
  paymentModes: [
    "RTGS / NEFT Bank Transfer",
    "Letter of Credit (LC)",
    "Wire Transfer (SWIFT)",
    "Pay Order",
    "Online Bank Transfer",
    "Cash / Cheque"
  ],
  shipmentModes: [
    "Sea Cargo (FCL / LCL via Kandla & Mundra Ports)",
    "Air Freight",
    "Road Freight Logistics across India"
  ],
  topExportCountries: [
    { country: "Sri Lanka", flag: "🇱🇰", region: "South Asia" },
    { country: "Somalia", flag: "🇸🇴", region: "East Africa" },
    { country: "Tunisia", flag: "🇹🇳", region: "North Africa" },
    { country: "Kenya", flag: "🇰🇪", region: "East Africa" },
    { country: "Bangladesh", flag: "🇧🇩", region: "South Asia" },
    { country: "Uzbekistan", flag: "🇺🇿", region: "Central Asia" }
  ],
  exportPercentage: "20% - 40% of Total Production",
  responseRate: "73% Quick Response Rate",
  rating: {
    score: 3.7,
    maxScore: 5.0,
    totalReviews: 9,
    breakdown: [
      { stars: 5, count: 6 },
      { stars: 4, count: 0 },
      { stars: 3, count: 0 },
      { stars: 2, count: 0 },
      { stars: 1, count: 3 }
    ]
  },
  certifications: [
    "IndiaMART TrustSEAL Verified",
    "GST Registered & Compliant (24ACAFA0567E1ZY)",
    "Directorate General of Foreign Trade (DGFT) IEC Certified (ACAFA0567E)",
    "Payment Protected Supplier",
    "MSME Registered Enterprise"
  ]
};
