export interface ProductSpec {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  price: string;
  image: string;
  specs: ProductSpec;
  description: string;
  featured?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  file?: string;
  tagline: string;
  icon: string;
  description: string;
  products: Product[];
}

export const CATEGORIES: ProductCategory[] = [
  {
    "id": "potassium-silicate",
    "name": "Potassium Silicate",
    "file": "potassium-silicate.html",
    "tagline": "High-purity soluble potassium silicates for welding, refractory, agriculture & specialized coatings",
    "icon": "FlaskConical",
    "description": "Ameyaa Industries manufactures and exports premium Potassium Silicate solutions, lumps, and fine powders with customizable SiO2:K2O molar ratios. Widely utilized in arc welding electrode flux binding, acid-resistant cement formulation, agricultural silicon fertilization, and heat-resistant masonry coatings.",
    "products": [
      {
        "id": "soap-potassium-silicate-lumps",
        "name": "Soap Potassium Silicate Lumps",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 45 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374261257/YB/RK/CN/183508270/phosphor-binder-potassium-silicate-lumps-500x500.jpg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Country of Origin": "Made in India",
          "Other Names": "Sodium Metasilicate",
          "Purity": "99%"
        },
        "description": "High purity Soap Potassium Silicate Lumps supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "adhesives-potassium-silicate-powder",
        "name": "Adhesives Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378607675/WM/YV/AK/183508270/concrete-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Concrete",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Adhesives Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "chemical-injection-potassium-silicate-powder",
        "name": "Chemical Injection Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378607408/NO/SC/DC/183508270/refractory-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Refractory",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Chemical Injection Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "ceramics-potassium-silicate-powder",
        "name": "Ceramics Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378607326/BL/DX/AT/183508270/automotive-repair-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Automotive Repair",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Ceramics Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "agriculture-potassium-silicate-powder",
        "name": "Agriculture Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378607213/FH/YR/KI/183508270/cosmetics-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Cosmetics",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Agriculture Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "food-industries-potassium-silicate-powder",
        "name": "Food Industries Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378607095/VX/KG/KM/183508270/foundries-potassium-silicate-powder-500x500.jpg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Foundries",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Food Industries Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "metals-potassium-silicate-powder",
        "name": "Metals Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378606772/JM/BJ/ON/183508270/mining-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Mining",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Metals Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "mineral-processing-potassium-silicate-powder",
        "name": "Mineral Processing Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374276986/KL/JH/RT/183508270/soap-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Country of Origin": "Made in India",
          "Other Names": "Sodium Metasilicate"
        },
        "description": "High purity Mineral Processing Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "petroleum-potassium-silicate-powder",
        "name": "Petroleum Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374256971/UE/DG/IU/183508270/refractory-coating-liquid-potassium-silicate-500x500.jpg",
        "specs": {
          "Packaging Size": "50 kg",
          "Grade Standard": "Industrial Grade",
          "Form": "Liquid",
          "Usage/Application": "Agriculture",
          "Country of Origin": "Made in India",
          "Color": "Light Yellow Liquid"
        },
        "description": "High purity Petroleum Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "detergent-potassium-silicate-powder",
        "name": "Detergent Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374257245/YL/EK/VY/183508270/soaps-liquid-potassium-silicate-500x500.jpg",
        "specs": {
          "Packaging Size": "50 litre",
          "Packaging type": "Drum",
          "Grade Standard": "Industrial Grade",
          "Form": "Liquid",
          "Type": "Potassium Silicate",
          "Usage/Application": "Soaps Liquid"
        },
        "description": "High purity Detergent Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "geopolymer-liquid-potassium-silicate",
        "name": "Geopolymer Liquid Potassium Silicate",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378605237/FR/EI/HK/183508270/oil-drilling-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Size": "25 kg",
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Usage/Application": "Oil Drilling",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Geopolymer Liquid Potassium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "timber-treatment-potassium-silicate-powder",
        "name": "Timber Treatment Potassium Silicate Powder",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378604448/YO/VM/DX/183508270/general-potassium-silicate-powder-500x500.jpeg",
        "specs": {
          "Packaging type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "Country of Origin": "Made in India",
          "Other Names": "Sodium Metasilicate",
          "Purity": "99%"
        },
        "description": "High purity Timber Treatment Potassium Silicate Powder supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "detergents-potassium-silicate-lumps",
        "name": "Detergents Potassium Silicate Lumps",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 45 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374261956/TP/OO/HG/183508270/soap-potassium-silicate-lumps-500x500.png",
        "specs": {
          "Packaging type": "Loose",
          "Form": "Lumps",
          "Usage/Application": "Acid Proof Lining",
          "Chemical Formulae": "K2O x SiO2",
          "Colour": "Colourless",
          "SiO2 (%)": "67.30"
        },
        "description": "High purity Detergents Potassium Silicate Lumps supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "oil-well-drilling-liquid-potassium-silicate",
        "name": "Oil Well Drilling Liquid Potassium Silicate",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374256253/HH/WC/TW/183508270/welding-electrode-liquid-potassium-silicate-500x500.jpg",
        "specs": {
          "Packaging type": "Drum",
          "Grade Standard": "Industrial Grade",
          "Form": "Liquid",
          "CAS Number": "1312-76-1",
          "Country of Origin": "Made in India",
          "Purity": "99%"
        },
        "description": "High purity Oil Well Drilling Liquid Potassium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "detergents-liquid-potassium-silicate",
        "name": "Detergents Liquid Potassium Silicate",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374256493/PX/PQ/ED/183508270/concrete-liquid-potassium-silicate-500x500.jpg",
        "specs": {
          "Packaging type": "Drum",
          "Grade Standard": "Industrial Grade",
          "Form": "Liquid",
          "CAS Number": "1312-76-1",
          "Country of Origin": "Made in India",
          "Purity": "99%"
        },
        "description": "High purity Detergents Liquid Potassium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "acid-proof-lining-liquid-potassium-silicate",
        "name": "Acid Proof Lining Liquid Potassium Silicate",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374258139/BE/XJ/MO/183508270/agriculture-liquid-potassium-silicate-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Form": "Liquid",
          "Usage/Application": "Agriculture",
          "Country of Origin": "Made in India",
          "Purity": "99%",
          "CAS No.": "1312-76-1"
        },
        "description": "High purity Acid Proof Lining Liquid Potassium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "paints-liquid-potassium-silicate",
        "name": "Paints Liquid Potassium Silicate",
        "category": "potassium-silicate",
        "categoryName": "Potassium Silicate",
        "price": "₹ 45 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374260478/SA/JD/DF/183508270/water-glass-lumps-500x500.png",
        "specs": {
          "Packaging type": "Loose",
          "Grade Standard": "Industrial Grade",
          "Country of Origin": "Made in India",
          "Condition": "Raw",
          "SiO2 (%)": "67.30%",
          "K2O (%)": "31.00%"
        },
        "description": "High purity Paints Liquid Potassium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      }
    ]
  },
  {
    "id": "sodium-silicate",
    "name": "Sodium Silicate",
    "file": "sodium-silicate.html",
    "tagline": "Liquid, lump & neutral/alkaline sodium silicates for detergents, paper, textiles & construction",
    "icon": "Boxes",
    "description": "Engineered sodium silicates manufactured to strict density and Baumé specifications. Our sodium silicate grades provide vital buffering, anti-corrosion, emulsification, and binding properties across laundry detergents, paper tube winding, soil stabilization, and foundry sand casting.",
    "products": [
      {
        "id": "laundry-detergent-sodium-silicate",
        "name": "Laundry Detergent Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374287278/AI/CW/OW/183508270/soap-sodium-silicate-500x500.png",
        "specs": {
          "Purity": "99.99%",
          "Color": "Transparent",
          "Packaging Type": "Loose",
          "Usage/Application": "Paper Industry",
          "Grade": "Industrial",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Laundry Detergent Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "sodium-silicate-liquid",
        "name": "Sodium Silicate Liquid",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 600 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375556219/YG/HW/BI/183508270/sodium-alumina-silicate-500x500.jpg",
        "specs": {
          "Purity": "99%",
          "Color": "White",
          "Form": "Powder",
          "Packaging Type": "Loose",
          "Usage/Application": "Paints And Rubber",
          "Grade": "Reagent"
        },
        "description": "High purity Sodium Silicate Liquid supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "alkaline-sodium-silicate",
        "name": "Alkaline Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 20 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421585199/NM/BP/LI/183508270/neutral-sodium-silicate-glass-500x500.jpg",
        "specs": {
          "Packaging Size": "50 kg",
          "Purity": "99%",
          "Form": "Granules",
          "Packaging Type": "Bag",
          "Color": "White",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Alkaline Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "sodium-silicate-neutral-glass",
        "name": "Sodium Silicate Neutral Glass",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 20 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421584214/QV/YE/CF/183508270/sodium-silicate-powder-neutral-500x500.jpeg",
        "specs": {
          "Packaging Size": "50 kg",
          "Purity": "99%",
          "Form": "Granules",
          "Packaging Type": "Bag",
          "Color": "White",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Sodium Silicate Neutral Glass supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "sodium-silicate-neutral",
        "name": "Sodium Silicate Neutral",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 20 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421585218/WW/SX/HT/183508270/neutral-sodium-silicate-glass-500x500.jpg",
        "specs": {},
        "description": "High purity Sodium Silicate Neutral supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "sodium-silicate-neutral-liquid",
        "name": "Sodium Silicate Neutral Liquid",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 20 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421586845/QK/OM/XJ/183508270/neutral-sodium-silicate-liquid-500x500.jpg",
        "specs": {},
        "description": "High purity Sodium Silicate Neutral Liquid supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "cement-industry-sodium-silicate",
        "name": "Cement Industry Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374286070/PW/FN/RR/183508270/wastewater-sodium-silicate-500x500.png",
        "specs": {
          "Purity": "99.99%",
          "Color": "Transparent",
          "Packaging Type": "Loose",
          "Usage/Application": "Wastewater Plants",
          "Grade": "Industrial",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Cement Industry Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "textile-industry-sodium-silicate",
        "name": "Textile Industry Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374263935/MK/CG/FD/183508270/laundry-detergent-sodium-silicate-500x500.jpg",
        "specs": {
          "Purity": "99.99%",
          "Color": "Transparent",
          "Packaging Type": "Loose",
          "Usage/Application": "Adhesives",
          "Grade": "Industrial",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Textile Industry Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "soap-sodium-silicate",
        "name": "Soap Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374263596/UV/RB/CL/183508270/making-drilling-fluids-sodium-silicate-500x500.jpg",
        "specs": {
          "Purity": "99.99%",
          "Color": "Transparent",
          "Packaging Type": "Loose",
          "Usage/Application": "Making Drilling Fluids",
          "Grade": "Industrial",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Soap Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "water-treatment-sodium-silicate",
        "name": "Water Treatment Sodium Silicate",
        "category": "sodium-silicate",
        "categoryName": "Sodium Silicate",
        "price": "₹ 150 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374286878/XK/XG/NA/183508270/ceramic-industry-sodium-silicate-500x500.jpg",
        "specs": {
          "Purity": "99.99%",
          "Color": "Transparent",
          "Packaging Type": "Loose",
          "Usage/Application": "Ceramic Industry",
          "Grade": "Industrial",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Water Treatment Sodium Silicate supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      }
    ]
  },
  {
    "id": "limestone-lumps-and-powder",
    "name": "Limestone Lumps & Powder",
    "file": "limestone-lumps-and-powder.html",
    "tagline": "High-calcium natural, burnt & micronized limestone minerals for metallurgy and construction",
    "icon": "Mountain",
    "description": "Sourced from high-grade natural calcite deposits and processed to high whiteness and purity (>95% CaCO3). Ameyaa provides quicklime, slaked lime, white limestone lumps, and fine powders for steel fluxing, flue-gas desulfurization, glassmaking, and wall putty.",
    "products": [
      {
        "id": "white-limestone-lumps",
        "name": "White Limestone Lumps",
        "category": "limestone-lumps-and-powder",
        "categoryName": "Limestone Lumps & Powder",
        "price": "₹ 700 / Tonne",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374999949/FP/MW/MQ/183508270/burnt-limestone-lumps-500x500.png",
        "specs": {
          "Packaging Size": "1000 kg",
          "Grade": "Chemical Grade",
          "Thickness": "16 mm",
          "Usage/Application": "Wall Cladding",
          "Packaging Type": "Loose",
          "Density": "3.50 g/cm3"
        },
        "description": "High purity White Limestone Lumps supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      },
      {
        "id": "natural-limestone-lump",
        "name": "Natural Limestone Lump",
        "category": "limestone-lumps-and-powder",
        "categoryName": "Limestone Lumps & Powder",
        "price": "₹ 1,000 / Tonne",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375381899/RE/GZ/UN/183508270/limestone-powder-500x500.jpg",
        "specs": {
          "State": "Powdered",
          "Color": "White",
          "Grade": "Chemical Grade",
          "CaCo3 %": "95%",
          "Application": "Industrial Purpose",
          "Country of Origin": "Made in India"
        },
        "description": "High purity Natural Limestone Lump supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      }
    ]
  },
  {
    "id": "sodium-metasilicate",
    "name": "Sodium Metasilicate",
    "file": "sodium-metasilicate.html",
    "tagline": "Anhydrous and pentahydrate crystalline builder for industrial cleaning & degreasing",
    "icon": "Atom",
    "description": "Strongly alkaline, free-flowing crystalline compound (Na2SiO3) with superior grease saponification, soil suspension, and corrosion inhibition. Ideal for vehicle wash formulations, industrial CIP cleaners, metal pretreatment, and institutional laundry detergents.",
    "products": [
      {
        "id": "sodium-metasilicate-anhydrous",
        "name": "Sodium Metasilicate Anhydrous",
        "category": "sodium-metasilicate",
        "categoryName": "Sodium Metasilicate",
        "price": "₹ 500 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378606500/HY/UG/BW/183508270/sodium-metasilicate-powder-500x500.jpeg",
        "specs": {
          "Packaging Type": "Bag",
          "Grade Standard": "Industrial Grade",
          "Form": "Powder",
          "CAS No": "6834-92-0",
          "Color": "White",
          "Usage/Application": "Detergent, Emulsifiers, Silicate Products, Soil Stabilizer"
        },
        "description": "High purity Sodium Metasilicate Anhydrous supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      }
    ]
  },
  {
    "id": "chloride",
    "name": "Chloride Compounds",
    "file": "chloride.html",
    "tagline": "Technical & industrial grade Magnesium Chloride & Potassium Chloride salts",
    "icon": "Layers",
    "description": "High-solubility chemical salts including hexahydrate magnesium chloride flakes and potassium chloride crystals for drilling fluid stabilization, dust suppression, refrigeration brines, chemical synthesis, and metallurgy.",
    "products": [
      {
        "id": "magnesium-chloride-industrial-uses",
        "name": "Magnesium chloride industrial uses",
        "category": "chloride",
        "categoryName": "Chloride Compounds",
        "price": "₹ 40 / Kg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/12/475680534/YX/XQ/ZM/183508270/potassium-chloride-500x500.jpg",
        "specs": {},
        "description": "High purity Magnesium chloride industrial uses supplied by Ameyaa Industries. Engineered for consistent chemical performance and industrial manufacturing reliability."
      }
    ]
  },
  {
    "id": "titanium-dioxide",
    "name": "Titanium Dioxide",
    "file": "titanium-dioxide.html",
    "tagline": "Rutile & Anatase white pigment powders for architectural coatings, plastics & paper",
    "icon": "Sparkles",
    "description": "Exceptional purity TiO2 pigment delivering maximum hiding power, tinting strength, weather resistance, and refractive brightness. Extensively used in paints, masterbatches, architectural primers, and specialty printing inks.",
    "products": [
      {
        "id": "titanium-dioxide",
        "name": "Titanium Dioxide",
        "category": "titanium-dioxide",
        "categoryName": "Titanium Dioxide",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378605810/XO/DX/NO/183508270/titanium-dioxide-powder-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Titanium Dioxide manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "titanium-dioxide-powder",
        "name": "Titanium Dioxide Powder",
        "category": "titanium-dioxide",
        "categoryName": "Titanium Dioxide",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378605810/XO/DX/NO/183508270/titanium-dioxide-powder-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Titanium Dioxide Powder manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "titanium-dioxide-rutile",
        "name": "Titanium Dioxide Rutile",
        "category": "titanium-dioxide",
        "categoryName": "Titanium Dioxide",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/378605810/XO/DX/NO/183508270/titanium-dioxide-powder-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Titanium Dioxide Rutile manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "detergent-raw-material",
    "name": "Detergent Raw Materials",
    "file": "detergent-raw-material.html",
    "tagline": "Core builders, fillers, silicates, and mineral additives for detergent manufacture",
    "icon": "PackageCheck",
    "description": "Comprehensive chemical bundle for powdered and liquid detergent manufacturers, featuring liquid silicates, china clay, calcined kaolin, optical enhancers, and pH buffer builders designed for cost-efficient cleaning power.",
    "products": [
      {
        "id": "detergent-raw-material",
        "name": "Detergent Raw Material",
        "category": "detergent-raw-material",
        "categoryName": "Detergent Raw Materials",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421586957/WY/UQ/FL/183508270/sodium-silicate-neutral-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Detergent Raw Material manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "liquid-sodium-silicate",
        "name": "Liquid Sodium Silicate",
        "category": "detergent-raw-material",
        "categoryName": "Detergent Raw Materials",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421586957/WY/UQ/FL/183508270/sodium-silicate-neutral-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Liquid",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Liquid Sodium Silicate manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "white-clay",
        "name": "White Clay",
        "category": "detergent-raw-material",
        "categoryName": "Detergent Raw Materials",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421586957/WY/UQ/FL/183508270/sodium-silicate-neutral-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified White Clay manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "china-clay",
        "name": "China Clay",
        "category": "detergent-raw-material",
        "categoryName": "Detergent Raw Materials",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/5/421586957/WY/UQ/FL/183508270/sodium-silicate-neutral-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified China Clay manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "sodium-siliconate",
    "name": "Sodium Siliconate",
    "file": "sodium-siliconate.html",
    "tagline": "Water-based reactive silicone water repellent for masonry damp-proofing & concrete sealers",
    "icon": "Droplets",
    "description": "Aqueous solution of sodium methyl siliconate that reacts with atmospheric carbon dioxide to form an insoluble, breathable silicone polymer barrier on porous masonry, stone, brickwork, and aerated concrete.",
    "products": [
      {
        "id": "sodium-siliconate",
        "name": "Sodium Siliconate",
        "category": "sodium-siliconate",
        "categoryName": "Sodium Siliconate",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374255433/YK/MW/WW/183508270/sodium-siliconate-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Sodium Siliconate manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "sodium-siliconate-liquid",
        "name": "Sodium Siliconate Liquid",
        "category": "sodium-siliconate",
        "categoryName": "Sodium Siliconate",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374255433/YK/MW/WW/183508270/sodium-siliconate-liquid-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Liquid",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Sodium Siliconate Liquid manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "dolomite-lumps",
    "name": "Dolomite Lumps & Powder",
    "file": "dolomite-lumps.html",
    "tagline": "Double-carbonate calcium magnesium mineral for ceramics, refractory & agriculture",
    "icon": "Gem",
    "description": "High-purity CaMg(CO3)2 mineral lumps and micro-pulverized powders offering consistent MgO and CaO content with low silica and iron impurities. Critical for blast furnace fluxing, ceramic glaze melting, and agricultural soil conditioning.",
    "products": [
      {
        "id": "dolomite-lumps",
        "name": "Dolomite Lumps",
        "category": "dolomite-lumps",
        "categoryName": "Dolomite Lumps & Powder",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375552018/YZ/HY/GV/183508270/dolomite-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Lumps",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Dolomite Lumps manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "white-dolomite-lumps",
        "name": "White Dolomite Lumps",
        "category": "dolomite-lumps",
        "categoryName": "Dolomite Lumps & Powder",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375552018/YZ/HY/GV/183508270/dolomite-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Lumps",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified White Dolomite Lumps manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "tcca-90-granules",
    "name": "TCCA 90 Granules",
    "file": "tcca-90-granules.html",
    "tagline": "Trichloroisocyanuric Acid 90% available chlorine for water sanitization & biocides",
    "icon": "ShieldAlert",
    "description": "High-efficiency slow-dissolving chlorine disinfectant with 90% active chlorine. Outstanding algaecide and bactericide for industrial recirculating cooling towers, municipal wastewater, textile bleaching, and swimming pools.",
    "products": [
      {
        "id": "tcca-90-granules",
        "name": "TCCA 90 Granules",
        "category": "tcca-90-granules",
        "categoryName": "TCCA 90 Granules",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/374249596/JC/NV/KW/183508270/tcca-90-granules-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified TCCA 90 Granules manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "feldspar-powder",
    "name": "Feldspar Soda Powder",
    "file": "feldspar-powder.html",
    "tagline": "Controlled-mesh sodium & potassium aluminosilicate flux for ceramics & vitreous china",
    "icon": "Grid",
    "description": "Carefully sorted and magnetic-separated soda feldspar with high alkali content and minimal iron oxide, providing lower firing temperatures, optimal vitrification, and translucent gloss in sanitaryware, vitrified tiles, and glaze formulas.",
    "products": [
      {
        "id": "feldspar-powder",
        "name": "Feldspar Powder",
        "category": "feldspar-powder",
        "categoryName": "Feldspar Soda Powder",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375367997/ZC/LH/AV/183508270/feldspar-soda-powder-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Feldspar Powder manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "feldspar-soda-powder",
        "name": "Feldspar Soda Powder",
        "category": "feldspar-powder",
        "categoryName": "Feldspar Soda Powder",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/1/375367997/ZC/LH/AV/183508270/feldspar-soda-powder-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Feldspar Soda Powder manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "limestone-powder",
    "name": "Kaolin & Limestone Powder",
    "file": "limestone-powder.html",
    "tagline": "Ultrafine calcined kaolin clay & micronized calcite fillers for paints, plastics & rubber",
    "icon": "Disc",
    "description": "Natural hydrous and calcined aluminum silicate clays and calcite powders featuring high brightness, low abrasiveness, controlled aspect ratio, and excellent chemical inertness for polymer reinforcement and functional coatings.",
    "products": [
      {
        "id": "limestone-powder",
        "name": "Limestone Powder",
        "category": "limestone-powder",
        "categoryName": "Kaolin & Limestone Powder",
        "price": "Price on Request",
        "image": "",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Limestone Powder manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "kaolin-clay",
        "name": "Kaolin Clay",
        "category": "limestone-powder",
        "categoryName": "Kaolin & Limestone Powder",
        "price": "Price on Request",
        "image": "",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Kaolin Clay manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "kaolin-powder",
        "name": "Kaolin Powder",
        "category": "limestone-powder",
        "categoryName": "Kaolin & Limestone Powder",
        "price": "Price on Request",
        "image": "",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Kaolin Powder manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  },
  {
    "id": "silicone-fluids",
    "name": "Silicone Fluids",
    "file": "silicone-fluids.html",
    "tagline": "Polydimethylsiloxane (PDMS) industrial lubricants, heat transfer & damping fluids",
    "icon": "Cpu",
    "description": "100% active linear polydimethylsiloxane fluids available in diverse viscosity ranges (50 cSt - 100,000 cSt). Features broad thermal stability (-40°C to +200°C), low surface tension, water repellency, and high dielectric strength.",
    "products": [
      {
        "id": "silicone-fluids",
        "name": "Silicone Fluids",
        "category": "silicone-fluids",
        "categoryName": "Silicone Fluids",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/11/464672549/KZ/FU/DX/183508270/silicone-fluids-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Silicone Fluids manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      },
      {
        "id": "silicone-fluids-industrial",
        "name": "Silicone Fluids (Industrial Grade)",
        "category": "silicone-fluids",
        "categoryName": "Silicone Fluids",
        "price": "Price on Request",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/11/464672549/KZ/FU/DX/183508270/silicone-fluids-500x500.jpg",
        "specs": {
          "Grade Standard": "Industrial Grade",
          "Physical State": "Powder / Granules",
          "Country of Origin": "Made in India",
          "Packaging Type": "Drum / Bag / Loose Bulk"
        },
        "description": "Certified Silicone Fluids (Industrial Grade) manufactured and supplied by Ameyaa Industries to national and international quality specifications."
      }
    ]
  }
];

export const ALL_PRODUCTS: Product[] = CATEGORIES.flatMap(cat => 
  cat.products.map((p, idx) => ({
    ...p,
    featured: idx === 0 || p.price.includes('₹')
  }))
);

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS.filter(p => p.featured).slice(0, 8);

export function getProductById(id: string): Product | undefined {
  return ALL_PRODUCTS.find(p => p.id === id);
}

export function getCategoryById(id: string): ProductCategory | undefined {
  return CATEGORIES.find(c => c.id === id);
}

export function getRelatedProducts(productId: string, limit: number = 4): Product[] {
  const current = getProductById(productId);
  if (!current) return ALL_PRODUCTS.slice(0, limit);
  
  const sameCategory = ALL_PRODUCTS.filter(p => p.category === current.category && p.id !== current.id);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  
  const others = ALL_PRODUCTS.filter(p => p.category !== current.category && p.id !== current.id);
  return [...sameCategory, ...others].slice(0, limit);
}

