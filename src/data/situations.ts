import {
  Banknote,
  Building,
  CalendarRange,
  Gavel,
  House,
  ShoppingBasket,
  UsersRound,
} from "lucide-react";

export const situationItems = [
  {
    id: "leaseholdEssentials",
    title: "Leasehold essentials",
    description:
      "Understanding leasehold, your rights and responsibilities, and leasehold reform",
    icon: House,
  },
  {
    id: "costsAndCharges",
    title: "Costs and charges",
    description:
      "Costs you may need to pay as a leaseholder, including service charges and ground rent",
    icon: Banknote,
  },
  {
    id: "leaseExtension",
    title: "Lease extension",
    description:
      "How to extend your lease, including the different routes and valuation",
    icon: CalendarRange,
  },
  {
    id: "buyingAndSelling",
    title: "Buying and selling",
    description:
      "The process for buying or selling a leasehold property or buying the freehold",
    icon: ShoppingBasket,
  },
  {
    id: "buildingManagement",
    title: "Building management",
    description:
      "How buildings are managed, including right to manage, repairs and fire safety",
    icon: Building,
  },
  {
    id: "disputes",
    title: "Disputes",
    description:
      "Dealing with leasehold disputes including enforcing your rights and applying to the tribunal",
    icon: Gavel,
  },
  {
    id: "sharedOwnership",
    title: "Shared ownership",
    description:
      "Advice if you’re thinking of buying a shared ownership property or already own one",
    icon: UsersRound,
  },
];
