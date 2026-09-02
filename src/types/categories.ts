import {
  Banknote,
  Building,
  CalendarRange,
  Gavel,
  House,
  ShoppingBasket,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Category =
  | "buildingManagement"
  | "buyingAndSelling"
  | "costsAndCharges"
  | "disputes"
  | "leaseExtension"
  | "leaseholdEssentials"
  | "sharedOwnership";

export const categoryDetails: Record<
  Category,
  {
    label: string;
    icon: LucideIcon;
  }
> = {
  buildingManagement: {
    label: "Building management",
    icon: Building,
  },
  buyingAndSelling: {
    label: "Buying and selling",
    icon: ShoppingBasket,
  },
  costsAndCharges: {
    label: "Costs and charges",
    icon: Banknote,
  },
  disputes: {
    label: "Disputes",
    icon: Gavel,
  },
  leaseExtension: {
    label: "Lease extension",
    icon: CalendarRange,
  },
  leaseholdEssentials: {
    label: "Leasehold essentials",
    icon: House,
  },
  sharedOwnership: {
    label: "Shared ownership",
    icon: UsersRound,
  },
};
