export interface Testimonial {
  id: string;
  author: string;
  company: string;
  location: string;
  country: string;
  rating: number;
  date: string;
  productName: string;
  feedback: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    author: "M. Rao",
    company: "Macpac Industries",
    location: "Vijayawada, Andhra Pradesh",
    country: "India",
    rating: 5,
    date: "12-September-2025",
    productName: "Alkaline Sodium Silicate",
    feedback: "Procured bulk alkaline sodium silicate for paper board production. The Baumé gravity was consistent batch-over-batch, allowing smooth lamination with zero delamination issues. Prompt dispatch.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sony Mathew",
    company: "Industrial Formulations",
    location: "Kottayam, Kerala",
    country: "India",
    rating: 5,
    date: "17-November-2025",
    productName: "Potassium Silicate Solution",
    feedback: "High-clarity potassium silicate with exact molar ratio as specified in COA. Excellent results in our acid-proof refractory mortar testing. Very cooperative technical team.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Piyush Patel",
    company: "Detergent & Chemical Works",
    location: "Ahmedabad, Gujarat",
    country: "India",
    rating: 5,
    date: "07-October-2025",
    productName: "Alkaline Sodium Silicate",
    feedback: "Local factory delivery within 24 hours. Material grade and clarity are superior. Competitive bulk pricing for detergent manufacturers.",
    verified: true
  },
  {
    id: "rev-4",
    author: "V. D. Jhala",
    company: "Precision Engineering & Foundry",
    location: "Ahmedabad, Gujarat",
    country: "India",
    rating: 5,
    date: "24-June-2025",
    productName: "Sodium Silicate Liquid Binder",
    feedback: "High bonding strength in our sand core molds with rapid CO2 gas gelling. Minimal gas evolution during metal pouring.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Ashraf Dhukka",
    company: "Elastomer & Rubber Solutions",
    location: "Mumbai, Maharashtra",
    country: "India",
    rating: 5,
    date: "18-March-2025",
    productName: "Silicone Fluids & Release Agents",
    feedback: "Supplied top tier PDMS silicone fluids for high-temp mold release. Thermal stability up to 180°C without residue.",
    verified: true
  },
  {
    id: "rev-6",
    author: "Badruzzaman",
    company: "Bengal Chemical Imports",
    location: "Dhaka",
    country: "Bangladesh",
    rating: 5,
    date: "07-October-2024",
    productName: "Alkaline Sodium Silicate (Export Drums)",
    feedback: "Complete export documentation, Phytosanitary and Certificate of Analysis provided in advance. Shipped on time via sea freight to Chittagong port.",
    verified: true
  },
  {
    id: "rev-7",
    author: "Sherzod",
    company: "Central Asia Mineral Trading",
    location: "Tashkent",
    country: "Uzbekistan",
    rating: 5,
    date: "06-January-2025",
    productName: "Sodium Silicate Powder",
    feedback: "Moisture-proof 25kg multiwall palletized packaging arrived in pristine condition across international transit. Exact solubility rate.",
    verified: true
  },
  {
    id: "rev-8",
    author: "Hiren Trivedi",
    company: "Ceramic Glaze Minerals",
    location: "Morbi, Gujarat",
    country: "India",
    rating: 5,
    date: "21-September-2024",
    productName: "Soda Feldspar Powder 200 Mesh",
    feedback: "Consistent alkali fluxing action in our porcelain tile slip. Lowest iron content in Morbi cluster.",
    verified: true
  }
];
