import { type Category } from "../types/categories";

export type GuidanceResource = {
  category: Category;
  title: string;
  description: string;
  href: string;
};

export const leaseholdBasicsResources: GuidanceResource[] = [
  {
    category: "leaseholdEssentials",
    title: "An introduction to leasehold",
    description:
      "What is leasehold and what you need to know about living in a leasehold property.",
    href: "https://www.lease-advice.org/leasehold/basics/leasehold/",
  },
  {
    category: "leaseholdEssentials",
    title: "A guide to leasehold retirement living",
    description: "Leaseholder rights if living in retirement housing.",
    href: "https://www.lease-advice.org/leasehold/basics/retirement-leases/",
  },
  {
    category: "leaseholdEssentials",
    title: "Right to buy",
    description:
      "Right to buy factsheet and example lease with clauses to be aware of.",
    href: "https://www.lease-advice.org/leasehold/basics/right-to-buy/",
  },
  {
    category: "leaseholdEssentials",
    title: "Commonhold: an alternative to leasehold",
    description:
      "What is commonhold and how to set up and run a commonhold association.",
    href: "https://www.lease-advice.org/leasehold/basics/commonhold/",
  },
];

export const leaseholdEssentialsResources: GuidanceResource[] = [
  ...leaseholdBasicsResources,
  {
    category: "leaseholdEssentials",
    title: "A basic guide to leaseholder rights and responsibilities",
    description:
      "Know your lease: rights, responsibilities and rules explained and clarified.",
    href: "https://www.lease-advice.org/leasehold/leaseholder-rights-and-responsibilities/",
  },
  {
    category: "leaseholdEssentials",
    title: "Find out who your landlord (freeholder) is",
    description:
      "How to get formal confirmation of your landlord (freeholder) or corporate landlord.",
    href: "https://www.lease-advice.org/leasehold/get-landlord-freeholder-details-confirmed/",
  },
  {
    category: "leaseholdEssentials",
    title: "Lease variation",
    description:
      "What a lease variation is, when it may be needed, and how the process works.",
    href: "https://www.lease-advice.org/leasehold/lease-variation/",
  },
  {
    category: "leaseholdEssentials",
    title: "Leasehold reforms explained",
    description: "What the reforms are and how they will help leaseholders.",
    href: "https://www.lease-advice.org/leasehold/leasehold-reforms/",
  },
  {
    category: "leaseholdEssentials",
    title: "Subletting and short-term lets",
    description:
      "What to check in your lease and the rules and steps for subletting your home.",
    href: "https://www.lease-advice.org/leasehold/subletting/",
  },
  {
    category: "leaseholdEssentials",
    title: "When your lease expires",
    description:
      "What to do before and after a lease expires including checking if you qualify for security of tenure.",
    href: "https://www.lease-advice.org/leasehold/when-lease-expires/",
  },
];

export const serviceChargesResources: GuidanceResource[] = [
  {
    category: "costsAndCharges",
    title: "About service charges",
    description:
      "An introduction to service charges including your rights as a leaseholder.",
    href: "https://www.lease-advice.org/costs-and-charges/service-charges/about-service-charges/",
  },
  {
    category: "costsAndCharges",
    title: "Challenging service charges",
    description:
      "When and how to challenge unreasonable service charges at a tribunal.",
    href: "https://www.lease-advice.org/costs-and-charges/service-charges/challenging-service-charges/",
  },
  {
    category: "costsAndCharges",
    title: "If you do not pay your service charge",
    description:
      "What your landlord can do if you do not pay, and how to get help.",
    href: "https://www.lease-advice.org/costs-and-charges/service-charges/if-you-do-not-pay/",
  },
];

export const section20Resources: GuidanceResource[] = [
  {
    category: "costsAndCharges",
    title: "Responding to Section 20 consultation",
    description:
      "Your consultation rights for major works or long-term agreements and how to respond.",
    href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/responding-to-section-20-consultation/",
  },
  {
    category: "costsAndCharges",
    title: "Qualifying long-term agreements (QLTAs)",
    description:
      "Your rights to be consulted about long-term contracts that your landlord arranges.",
    href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/qltas/",
  },
  {
    category: "costsAndCharges",
    title: "What happens if your landlord does not consult",
    description:
      "Options if your landlord does not follow the Section 20 rules on consulting about major works.",
    href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/if-your-landlord-does-not-consult/",
  },
  {
    category: "costsAndCharges",
    title: "Example Section 20 notices for private sector landlords",
    description:
      "Example notices that landlords may send to leaseholders to consult under Section 20.",
    href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/example-section-20-notices-for-private-sector-landlords/",
  },
  {
    category: "costsAndCharges",
    title: "Example Section 20 notices for public sector landlords",
    description:
      "Example notices that public sector landlords may send to leaseholders to consult under Section 20.",
    href: "https://www.lease-advice.org/costs-and-charges/section-20-consultation/example-section-20-notices-public-sector-landlords/",
  },
];

export const costsAndChargesResources: GuidanceResource[] = [
  ...serviceChargesResources,
  ...section20Resources,
  {
    category: "costsAndCharges",
    title: "Administration charges",
    description:
      "What administration charges are and how to challenge unfair charges.",
    href: "https://www.lease-advice.org/costs-and-charges/administration-charges/",
  },
  {
    category: "costsAndCharges",
    title: "Ground rent",
    description:
      "Paying ground rent and what to do if you have problems with high ground rent.",
    href: "https://www.lease-advice.org/costs-and-charges/ground-rent/",
  },
  {
    category: "costsAndCharges",
    title: "Heat networks billing",
    description:
      "Billing for properties connected to a heat network and how to resolve problems.",
    href: "https://www.lease-advice.org/costs-and-charges/heat-networks-billing/",
  },
  {
    category: "costsAndCharges",
    title: "Reserve or sinking funds",
    description: "What are they, how they work and making contributions.",
    href: "https://www.lease-advice.org/costs-and-charges/reserve-or-sinking-funds/",
  },
];

export const leaseExtensionFlatResources: GuidanceResource[] = [
  {
    category: "leaseExtension",
    title: "Lease extension: getting started",
    description:
      "What to consider before starting a lease extension and how to prepare.",
    href: "https://www.lease-advice.org/lease-extension/flats/getting-started/",
  },
  {
    category: "leaseExtension",
    title: "Lease extension: the informal route",
    description:
      "How the informal lease extension process works and what to consider before agreeing.",
    href: "https://www.lease-advice.org/lease-extension/flats/informal-route/",
  },
  {
    category: "leaseExtension",
    title: "Lease extension: the formal route",
    description:
      "Step-by-step guidance on extending your lease using the formal legal process.",
    href: "https://www.lease-advice.org/lease-extension/flats/formal-route/",
  },
  {
    category: "leaseExtension",
    title: "Lease extension for special situations",
    description:
      "When the standard lease extension process may not apply and what your options are.",
    href: "https://www.lease-advice.org/lease-extension/flats/special-situations/",
  },
  {
    category: "leaseExtension",
    title: "Lease extension valuation",
    description:
      "How lease extension valuations work and why it's important to get professional advice.",
    href: "https://www.lease-advice.org/lease-extension/flats/valuation/",
  },
  {
    category: "leaseExtension",
    title: "Marriage value",
    description:
      "What marriage value is, when it applies, and how it affects lease extension costs.",
    href: "https://www.lease-advice.org/lease-extension/flats/marriage-value/",
  },
];

export const leaseExtensionResources: GuidanceResource[] = [
  ...leaseExtensionFlatResources,
  {
    category: "leaseExtension",
    title: "Lease extension and leasehold reforms",
    description:
      "Things to consider when deciding whether to extend your lease now or to wait for the leasehold reforms.",
    href: "https://www.lease-advice.org/lease-extension/leasehold-reforms/",
  },
  {
    category: "leaseExtension",
    title: "Lease extension for leasehold houses",
    description:
      "How lease extension works for leasehold houses and how it differs from flats.",
    href: "https://www.lease-advice.org/lease-extension/leasehold-houses/",
  },
];

export const leaseholdPropertyResources: GuidanceResource[] = [
  {
    category: "buyingAndSelling",
    title: "Buying and selling: an introduction",
    description:
      "An introduction to things you need to know if you buy a leasehold property.",
    href: "https://www.lease-advice.org/buying-and-selling/leasehold-property/introduction/",
  },
  {
    category: "buyingAndSelling",
    title: "Things to know before you buy a leasehold flat",
    description:
      "Key things to check when buying a flat, including the lease length, ground rent and service charges.",
    href: "https://www.lease-advice.org/buying-and-selling/leasehold-property/things-to-know/",
  },
  {
    category: "buyingAndSelling",
    title: "Buying or selling a leasehold flat: process and timing",
    description:
      "FAQs about the process of buying or selling a leasehold flat.",
    href: "https://www.lease-advice.org/buying-and-selling/leasehold-property/process-and-timing/",
  },
  {
    category: "buyingAndSelling",
    title: "Common problems and disputes in leasehold transactions",
    description:
      "FAQs about problems that can happen when buying or selling a leasehold property.",
    href: "https://www.lease-advice.org/buying-and-selling/leasehold-property/common-problems/",
  },
];

export const buyingTheFreeholdResources: GuidanceResource[] = [
  {
    category: "buyingAndSelling",
    title: "Buying a share of the freehold for your flat",
    description:
      "How to buy your building's freehold through collective enfranchisement.",
    href: "https://www.lease-advice.org/buying-and-selling/buying-the-freehold/buying-the-freehold-flats/",
  },
  {
    category: "buyingAndSelling",
    title: "Buying the freehold of a leasehold house",
    description:
      "How to buy the freehold of your house, including who qualifies, valuation and the process.",
    href: "https://www.lease-advice.org/buying-and-selling/buying-the-freehold/buying-the-freehold-houses/",
  },
  {
    category: "buyingAndSelling",
    title: "Right of first refusal",
    description:
      "Your right to buy the freehold if your landlord wants to sell, and how it works.",
    href: "https://www.lease-advice.org/buying-and-selling/buying-the-freehold/right-first-refusal/",
  },
];

export const buyingAndSellingResources: GuidanceResource[] = [
  ...leaseholdPropertyResources,
  ...buyingTheFreeholdResources,
];

export const rightToManageResources: GuidanceResource[] = [
  {
    category: "buildingManagement",
    title: "About the right to manage",
    description:
      "About the right to manage, eligibility criteria and steps to set it up.",
    href: "https://www.lease-advice.org/building-management/right-to-manage/about-the-right-to-manage/",
  },
  {
    category: "buildingManagement",
    title: "Setting up the right to manage",
    description:
      "Step-by-step guide to setting up the right to manage and taking over management.",
    href: "https://www.lease-advice.org/building-management/right-to-manage/setting-up-the-right-to-manage/",
  },
  {
    category: "buildingManagement",
    title: "Running a right to manage company",
    description:
      "Guide for leaseholders taking on the director's role of a right to manage company.",
    href: "https://www.lease-advice.org/building-management/right-to-manage/running-a-right-to-manage-company/",
  },
];

export const managementResources: GuidanceResource[] = [
  {
    category: "buildingManagement",
    title: "How leasehold properties are managed",
    description:
      "The different types of management arrangements, and standards and costs.",
    href: "https://www.lease-advice.org/building-management/management/how-leasehold-properties-are-managed/",
  },
  {
    category: "buildingManagement",
    title: "Leasehold management problems",
    description:
      "Your options if you're unhappy with how your building is managed.",
    href: "https://www.lease-advice.org/building-management/management/leasehold-management-problems/",
  },
  {
    category: "buildingManagement",
    title: "Using a property manager",
    description:
      "A guide for leaseholders on how to appoint and employ a property manager for your block.",
    href: "https://www.lease-advice.org/building-management/management/using-a-property-manager/",
  },
  {
    category: "buildingManagement",
    title: "Asking a tribunal to appoint a new property manager",
    description:
      "How to apply to the tribunal for a new manager, if there are management problems with your building.",
    href: "https://www.lease-advice.org/building-management/management/appointment-of-a-manager/",
  },
  {
    category: "buildingManagement",
    title: "Getting a professional opinion on the management of your building",
    description:
      "Leaseholders' rights to appoint a surveyor or commission an audit to look into their landlord's management.",
    href: "https://www.lease-advice.org/building-management/management/professional-opinion-building-management/",
  },
];

export const repairsResources: GuidanceResource[] = [
  {
    category: "buildingManagement",
    title: "Repairs and maintenance in leasehold properties",
    description:
      "Responsibility for repairs and what to do if your landlord does not fix the problem.",
    href: "https://www.lease-advice.org/building-management/repairs/repairs-and-maintenance-in-leasehold-properties/",
  },
  {
    category: "buildingManagement",
    title: "Alterations and home improvements",
    description:
      "What to check in your lease, the rules and steps before starting home improvements.",
    href: "https://www.lease-advice.org/building-management/repairs/alterations-and-home-improvements/",
  },
  {
    category: "buildingManagement",
    title: "Pre-Action Protocol for Housing Conditions Claims",
    description:
      "Steps the courts will expect you to follow before starting legal proceedings for disrepair.",
    href: "https://www.lease-advice.org/building-management/repairs/pre-action-protocol/",
  },
  {
    category: "buildingManagement",
    title: "Water leaks in leasehold flats",
    description:
      "Check who is responsible for fixing water leaks and how to get them fixed.",
    href: "https://www.lease-advice.org/building-management/repairs/water-leaks/",
  },
];

export const fireSafetyResources: GuidanceResource[] = [
  {
    category: "buildingManagement",
    title: "Fire risk assessments",
    description:
      "Who is responsible for the fire risk assessment and how recommendations are implemented.",
    href: "https://www.lease-advice.org/building-management/fire-safety/fire-risk-assessments/",
  },
  {
    category: "buildingManagement",
    title: "Fire doors in leasehold flats",
    description:
      "Responsibilities for fire doors in flats, and what to do if you need to replace your door.",
    href: "https://www.lease-advice.org/building-management/fire-safety/fire-doors/",
  },
  {
    category: "buildingManagement",
    title: "Fire safety measures",
    description:
      "A guide to fire safety measures for leaseholders covering who pays, legal responsibilities, fire alarms, personal evacuation plans (PEEPs).",
    href: "https://www.lease-advice.org/building-management/fire-safety/fire-safety-measures/",
  },
  {
    category: "buildingManagement",
    title:
      "Fixing cladding and safety defects: buildings at least 11 metres or 5 storeys (England)",
    description:
      "How fire safety remediation works, who pays and what to do about costs or delays.",
    href: "https://www.lease-advice.org/building-management/fire-safety/remediation/",
  },
  {
    category: "buildingManagement",
    title:
      "Leaseholder protections: buildings at least 11 metres or 5 storeys (England)",
    description:
      "How the protections limit what you pay for unsafe cladding and historic safety defects.",
    href: "https://www.lease-advice.org/building-management/fire-safety/leaseholder-protections/",
  },
  {
    category: "buildingManagement",
    title:
      "What to check if you're charged for historic safety defects (England)",
    description:
      "Check your rights if your landlord wants to charge you for fire safety work.",
    href: "https://www.lease-advice.org/building-management/fire-safety/historic-defect-charges/",
  },
  {
    category: "buildingManagement",
    title:
      "Paying historic fire safety costs: buildings under 11 metres or 5 storeys (England)",
    description:
      "Check if work is needed, challenge unreasonable costs and explore options like warranties, insurance and legal action.",
    href: "https://www.lease-advice.org/building-management/fire-safety/paying-historic-fire-safety-costs-buildings-in-england-under-11-metres-or-under-5-storeys/",
  },
  {
    category: "buildingManagement",
    title: "Paying for historic fire safety defects in Wales",
    description:
      "Protections from fire safety costs for leaseholders in Wales, and future law changes.",
    href: "https://www.lease-advice.org/building-management/fire-safety/paying-for-historic-fire-safety-defects-wales/",
  },
  {
    category: "buildingManagement",
    title: "Buying, selling or remortgaging a flat with fire safety issues",
    description:
      "Finding a mortgage lender, and your protection from the cost of fixing problems.",
    href: "https://www.lease-advice.org/building-management/fire-safety/selling-or-remortgaging-a-flat-with-fire-safety-issues/",
  },
  {
    category: "buildingManagement",
    title: "Fire safety for resident directors",
    description:
      "An overview of fire safety responsibilities for directors of right to manage companies or residents’ management companies.",
    href: "https://www.lease-advice.org/building-management/fire-safety/fire-safety-for-directors/",
  },
];

export const recognisedTenantsAssociationResources: GuidanceResource[] = [
  {
    category: "buildingManagement",
    title: "Legal rights of a recognised tenants' association",
    description:
      "What a recognised tenants' association can do and the legal rights it has on behalf of leaseholders.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/powers/",
  },
  {
    category: "buildingManagement",
    title: "Eligibility criteria for recognition of a tenants' association",
    description:
      "The criteria tribunals use to decide whether a tenants' association can be recognised.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/eligibility/",
  },
  {
    category: "buildingManagement",
    title:
      "Using a request notice to get details of qualifying tenants (England)",
    description:
      "How to use a request notice to obtain details of qualifying tenants who are not already members.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/request-notice-get-details-of-qualifying-tenants/",
  },
  {
    category: "buildingManagement",
    title: "How to apply for recognised status of your tenants' association",
    description:
      "How to apply for recognition either by asking the landlord or through a tribunal process.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/apply-recognised-status/",
  },
  {
    category: "buildingManagement",
    title:
      "Supporting evidence for getting recognition of a tenants' association",
    description:
      "The evidence you may need to show that the association is democratic, independent and properly constituted.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/supporting-evidence/",
  },
  {
    category: "buildingManagement",
    title: "Running the tenants' association and maintaining recognition",
    description:
      "How a recognised association should be run and the steps needed to maintain recognition.",
    href: "https://www.lease-advice.org/building-management/recognised-tenants-associations/running-tenants-association-maintaining-recognition/",
  },
];

export const buildingManagementResources: GuidanceResource[] = [
  ...rightToManageResources,
  ...managementResources,
  ...repairsResources,
  ...fireSafetyResources,
  ...recognisedTenantsAssociationResources,
];

export const tribunalResources: GuidanceResource[] = [
  {
    category: "disputes",
    title: "Applying to the First-tier Tribunal (Property Chamber)",
    description:
      "How to apply to the tribunal in England to resolve leasehold issues.",
    href: "https://www.lease-advice.org/disputes/tribunal/applying-to-the-first-tier-tribunal/",
  },
  {
    category: "disputes",
    title: "Types of application to the First-tier Tribunal (Property Chamber)",
    description:
      "The leasehold issues that the tribunal can deal with in England, and how to apply.",
    href: "https://www.lease-advice.org/disputes/tribunal/types-of-ftt-application/",
  },
  {
    category: "disputes",
    title: "Applying to the Leasehold Valuation Tribunal (Wales)",
    description:
      "How to apply to the Leasehold Valuation Tribunal to resolve a leasehold dispute in Wales.",
    href: "https://www.lease-advice.org/disputes/tribunal/applying-to-the-lvt-wales/",
  },
  {
    category: "disputes",
    title: "Types of Leasehold Valuation Tribunal application (Wales)",
    description:
      "Types of issue the Leasehold Valuation Tribunal can deal with in Wales, and how to apply.",
    href: "https://www.lease-advice.org/disputes/tribunal/types-of-lvt-application/",
  },
  {
    category: "disputes",
    title: "Mediation at the First-tier Tribunal",
    description:
      "What to expect if the tribunal offers mediation to resolve a leasehold dispute.",
    href: "https://www.lease-advice.org/disputes/tribunal/mediation-at-the-first-tier-tribunal/",
  },
  {
    category: "disputes",
    title: "Jurisdiction over leasehold issues",
    description:
      "The process for transferring a case from the county court to the tribunal.",
    href: "https://www.lease-advice.org/disputes/tribunal/jurisdiction-over-leasehold-issues/",
  },
];

export const disputesResources: GuidanceResource[] = [
  ...tribunalResources,
  {
    category: "disputes",
    title: "A guide to resolving leasehold disputes",
    description:
      "How to resolve leasehold disputes and enforce the terms of your lease.",
    href: "https://www.lease-advice.org/disputes/resolving-leasehold-disputes/",
  },
  {
    category: "disputes",
    title: "Alternative dispute resolution",
    description:
      "Using alternative dispute resolution such as mediation for resolving leasehold disputes.",
    href: "https://www.lease-advice.org/disputes/alternative-dispute-resolution/",
  },
  {
    category: "disputes",
    title: "Breaching your lease and forfeiture",
    description:
      "How to avoid breaching your lease and steps to take if threatened with forfeiture.",
    href: "https://www.lease-advice.org/disputes/breaching-your-lease-and-forfeiture/",
  },
  {
    category: "disputes",
    title: "Redress schemes for complaints about property management",
    description:
      "How to complain to a redress scheme about a property manager, and what happens.",
    href: "https://www.lease-advice.org/disputes/redress-schemes/",
  },
  {
    category: "disputes",
    title: "Using a solicitor",
    description:
      "How solicitors can help with leasehold issues, finding one and free or low-cost legal advice.",
    href: "https://www.lease-advice.org/disputes/using-a-solicitor/",
  },
];

export const guidanceResources = [
  ...leaseholdEssentialsResources,
  ...costsAndChargesResources,
  ...leaseExtensionResources,
  ...buyingAndSellingResources,
  ...buildingManagementResources,
  ...disputesResources,
];
