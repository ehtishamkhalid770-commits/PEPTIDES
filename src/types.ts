export interface Product {
  id: string;
  name: string;
  type: string;
  shortDesc: string;
  vialSize: string;
  concentration: string;
  dosage: string;
  purity: string;
  regularPrice: number;
  promoPrice: number;
  hasMonthlyPlan: boolean;
  monthlyPlanPrice?: number;
  monthlyPlanRegularPrice?: number;
  durationText: string;
  idealFor: string[];
  specs: {
    label: string;
    value: string;
  }[];
  image: string;
  benefits: {
    title: string;
    desc: string;
    icon: string;
  }[];
}

export interface BenefitCard {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface UsageStep {
  step: number;
  title: string;
  desc: string;
  iconName: string;
}
