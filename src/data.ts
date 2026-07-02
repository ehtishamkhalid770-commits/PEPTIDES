import { Product } from "./types";
import { retatrude } from "/src/assets/images/retatrutide_box_vial_1783031480387.jpg";


export const PRODUCTS: Product[] = [
  {
    id: "retatrutide",
    name: "Retatrutide",
    type: "NEW GENERATION GLP-3 PEPTIDE",
    shortDesc: "Retatrutide combines three key hormonal pathways working in synergy to deliver superior results in fat loss, appetite control, and energy expenditure.",
    vialSize: "3 mL",
    concentration: "30 mg",
    dosage: "30 mg / 3 mL",
    purity: ">99.2%",
    regularPrice: 340,
    promoPrice: 280,
    hasMonthlyPlan: true,
    monthlyPlanPrice: 150,
    monthlyPlanRegularPrice: 200,
    durationText: "up to 9 weeks",
    idealFor: [
      "Advanced fat loss",
      "Appetite and cravings control",
      "Body composition enhancement",
      "Metabolic optimization",
      "Active individuals & athletes"
    ],
    image:{retatrude},
    specs: [
      { label: "Concentration", value: "30 mg" },
      { label: "Vial Size", value: "3 mL" },
      { label: "Chemical Purity", value: ">99.2% (HPLC)" },
      { label: "Formulation", value: "Lyophilized Powder" },
      { label: "Classification", value: "Triple Agonist (GLP-1, GIP, Glucagon)" },
      { label: "Storage", value: "Store at 2°C - 8°C (Refrigerated)" },
      { label: "Grade", value: "Scientific Research / Research Only" }
    ],
    benefits: [
      {
        title: "Advanced Fat Loss",
        desc: "Promotes a significant reduction in body fat, including highly stubborn visceral fat deposits.",
        icon: "TrendingDown"
      },
      {
        title: "Appetite Control",
        desc: "Potently decreases hunger and cravings, enabling an easy and highly sustainable caloric deficit.",
        icon: "Heart"
      },
      {
        title: "Increased Energy Expenditure",
        desc: "Activates cellular receptors that increase basal metabolic rate at rest and during physical activity.",
        icon: "Zap"
      },
      {
        title: "Insulin Sensitivity",
        desc: "Supports blood glucose control, optimizing the absorption and cellular utilization of carbohydrates.",
        icon: "Activity"
      },
      {
        title: "Muscle Mass Preservation",
        desc: "Promotes selective burning of adipose tissue while protecting lean muscle fiber structures.",
        icon: "ShieldAlert"
      },
      {
        title: "Metabolic Optimization",
        desc: "Comprehensive metabolic enhancement to support overall health and long-term fat loss results.",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    type: "THE COLLAGEN-PRODUCING PEPTIDE",
    shortDesc: "GHK-Cu is a natural, regenerative copper peptide that reverses cellular aging, repairs damaged tissues, and stimulates structural collagen synthesis.",
    vialSize: "3 mL",
    concentration: "100 mg",
    dosage: "100 mg / 3 mL",
    purity: ">99.5%",
    regularPrice: 150,
    promoPrice: 100,
    hasMonthlyPlan: false,
    durationText: "lasts up to 14 weeks",
    idealFor: [
      "Boosting collagen and elastin",
      "Improving skin firmness and elasticity",
      "Tissue repair and scar healing",
      "Increasing hair follicle density",
      "Reversing skin aging indicators"
    ],
    image: "/src/assets/images/ghk_cu_vial_1783031498591.jpg",
    specs: [
      { label: "Concentration", value: "100 mg" },
      { label: "Vial Size", value: "3 mL" },
      { label: "Chemical Purity", value: ">99.5% (HPLC)" },
      { label: "Formulation", value: "Blue Crystalline Lyophilized" },
      { label: "Classification", value: "Metal-Binding Peptide (Copper)" },
      { label: "Storage", value: "Store at 2°C - 8°C (Protect from light)" },
      { label: "Grade", value: "Scientific Research / Research Only" }
    ],
    benefits: [
      {
        title: "Stimulates Collagen",
        desc: "Dramatically increases the natural production of structural collagen and elastin at a deep cellular level.",
        icon: "Sparkles"
      },
      {
        title: "Firmer, Youthful Skin",
        desc: "Visibly enhances elasticity, deep hydration, and promotes a smooth, uniform skin texture.",
        icon: "User"
      },
      {
        title: "Repair & Regenerate",
        desc: "Supports accelerated repair of damaged tissues, scar revision, and speeds up systemic healing.",
        icon: "Activity"
      },
      {
        title: "Strengthens Hair",
        desc: "Promotes healthy hair growth by stimulating hair follicles and enhancing hair density and thickness.",
        icon: "Zap"
      }
    ]
  },
  {
    id: "bac-water",
    name: "BAC Water",
    type: "PREMIUM RECONSTITUTION SOLVENT",
    shortDesc: "Sterile bacteriostatic water ideal for reconstituting lyophilized peptides, safely inhibiting bacterial growth and extending the compound's shelf life.",
    vialSize: "10 mL",
    concentration: "10 mL",
    dosage: "10 mL Vial",
    purity: "USP Grade",
    regularPrice: 30,
    promoPrice: 20,
    hasMonthlyPlan: false,
    durationText: "suitable for multiple vials",
    idealFor: [
      "Safe reconstitution of peptides",
      "Inhibition of bacterial development",
      "Preserves peptides safely for up to 28 days",
      "Maintains sterile laboratory conditions"
    ],
    image: "/src/assets/images/bac_water_vial_1783031517832.jpg",
    specs: [
      { label: "Concentration", value: "0.9% Benzyl Alcohol" },
      { label: "Vial Size", value: "10 mL" },
      { label: "Purity", value: "USP Grade Water for Injection" },
      { label: "Formulation", value: "Sterile Bacteriostatic Solvent" },
      { label: "Classification", value: "Reconstitution Solvent Agent" },
      { label: "Storage", value: "Store at 15°C - 30°C (Do not freeze)" },
      { label: "Grade", value: "Scientific Research / Research Only" }
    ],
    benefits: [
      {
        title: "Homogeneous Reconstitution",
        desc: "Ensures the perfect dissolution of the lyophilized peptide without degrading its molecular bonds.",
        icon: "Sparkles"
      },
      {
        title: "Bacteriostatic Action",
        desc: "0.9% Benzyl Alcohol inhibits bacterial replication, preserving sterile conditions.",
        icon: "ShieldAlert"
      },
      {
        title: "Extended Preservation",
        desc: "Allows the reconstituted research specimens to be stored under refrigeration safely for weeks.",
        icon: "Heart"
      },
      {
        title: "USP Clinical Grade",
        desc: "Adheres to strict filtration, sterility, and pyrogen-free pharmaceutical standards.",
        icon: "Activity"
      }
    ]
  }
];

export const BADGES = [
  { label: "CERTIFIED QUALITY", icon: "Award" },
  { label: "LAB TESTED", icon: "FlaskConical" },
  { label: "RESEARCH USE ONLY", icon: "AlertTriangle" },
  { label: "VERIFIED PURITY", icon: "CheckCircle2" },
  { label: "SECURE PACKAGING", icon: "Lock" },
  { label: "MADE IN THE USA", icon: "Globe" }
];

export const MECHANISM_DATA = [
  {
    title: "GLP-1",
    desc: "Potently reduces appetite in brain signaling pathways and improves gastric satiety by slowing stomach emptying, preventing hunger spikes."
  },
  {
    title: "GIP",
    desc: "Optimizes overall insulin sensitivity, improves nutrient partitioning, and ensures cells correctly utilize ingested macronutrients as energy."
  },
  {
    title: "GLUCAGON",
    desc: "Significantly elevates basal metabolic rate (resting calorie burn) while directly promoting adipose lipolysis and heat production (thermogenesis)."
  }
];

export const USAGE_STEPS = [
  {
    step: 1,
    title: "PREPARE",
    desc: "Reconstitute the lyophilized powder vial using sterile bacteriostatic water (BAC Water) as per lab protocol guidelines.",
    iconName: "Beaker"
  },
  {
    step: 2,
    title: "MEASURE",
    desc: "Extract the exact dose required for your protocol using sterile, calibrated instruments to ensure accuracy.",
    iconName: "Layers"
  },
  {
    step: 3,
    title: "APPLY",
    desc: "Perform subcutaneous application using proper aseptic technique on designated research tissue areas.",
    iconName: "Minimize"
  },
  {
    step: 4,
    title: "CONSISTENCY",
    desc: "Maintain a steady timeline of applications matching your research plan's exact design and dosage schedule.",
    iconName: "Calendar"
  },
  {
    step: 5,
    title: "RESULTS",
    desc: "With proper methodology, precision dosing, and regular consistency, your research data will demonstrate clear, noticeable, and steady outcomes.",
    iconName: "TrendingUp"
  }
];
