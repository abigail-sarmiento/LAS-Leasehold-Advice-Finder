import type { Category } from "../types/categories";

export type QuestionnaireChoice = {
  value: string;
  label: string;
  description?: string;
};

export type QuestionnaireInput = {
  label: string;
  placeholder: string;
};

export type QuestionItem = {
  name: string;
  required: boolean;
  prompt: string;
  description: string;
  choices: QuestionnaireChoice[];
  input?: QuestionnaireInput;
};

export const questionsByCategory: Record<Category, QuestionItem[]> = {
  buildingManagement: [
    {
      name: "building_issue_type",
      required: true,
      prompt: "What type of building management issue are you dealing with?",
      description: "Choose the issue that best matches your situation.",
      choices: [
        { value: "repairs", label: "Repairs and maintenance" },
        { value: "fire-safety", label: "Fire safety and building safety" },
        { value: "management", label: "How the building is managed" },
        {
          value: "right-to-manage",
          label: "Right to manage or consultation",
        },
        { value: "other", label: "Something else" },
      ],
      input: {
        label: "Tell us more",
        placeholder: "Describe the issue in a bit more detail…",
      },
    },
    {
      name: "building_responsibility",
      required: false,
      prompt: "Who do you need to deal with about it?",
      description: "This helps narrow the next steps.",
      choices: [
        { value: "landlord", label: "Landlord or freeholder" },
        { value: "agent", label: "Managing agent" },
        { value: "rmc", label: "Resident management company" },
        { value: "not-sure", label: "Not sure yet" },
      ],
    },
  ],
  buyingAndSelling: [
    {
      name: "transaction_stage",
      required: true,
      prompt: "What stage are you at in the process?",
      description: "This helps us focus on the right information.",
      choices: [
        { value: "before-offer", label: "Before an offer is accepted" },
        { value: "after-offer", label: "After an offer is accepted" },
        { value: "completing", label: "Approaching completion" },
        { value: "after-purchase", label: "After purchase" },
      ],
    },
    {
      name: "transaction_type",
      required: true,
      prompt: "Are you buying, selling, or buying the freehold?",
      description: "Tell us which route applies to your circumstances.",
      choices: [
        { value: "buying", label: "Buying a leasehold property" },
        { value: "selling", label: "Selling a leasehold property" },
        { value: "freehold", label: "Buying the freehold" },
        { value: "not-sure", label: "Not sure yet" },
      ],
      input: {
        label: "More detail",
        placeholder: "Add any extra details about the transaction…",
      },
    },
  ],
  costsAndCharges: [
    {
      name: "charge_type",
      required: true,
      prompt: "Which type of cost is the main issue?",
      description: "Choose the area that concerns you most.",
      choices: [
        { value: "service-charge", label: "Service charge" },
        { value: "ground-rent", label: "Ground rent" },
        { value: "major-works", label: "Major works or sinking fund" },
        { value: "legal-fees", label: "Legal or admin fees" },
        { value: "other", label: "Another cost" },
      ],
    },
    {
      name: "charge_problem",
      required: false,
      prompt: "What is the problem with the cost?",
      description: "Select the issue that best fits.",
      choices: [
        { value: "amount", label: "The amount seems too high" },
        { value: "timing", label: "The payment timing is a problem" },
        { value: "challenge", label: "I want to challenge it" },
        { value: "transparency", label: "I do not understand the bill" },
      ],
      input: {
        label: "Explain the issue",
        placeholder: "Share any details you want to include…",
      },
    },
  ],
  disputes: [
    {
      name: "dispute_type",
      required: true,
      prompt: "What kind of dispute are you trying to resolve?",
      description: "Choose the area that matches your issue.",
      choices: [
        { value: "repairs-dispute", label: "Repairs or maintenance dispute" },
        {
          value: "service-charge-dispute",
          label: "Service charge or ground rent dispute",
        },
        {
          value: "management-dispute",
          label: "Management or decision-making dispute",
        },
        { value: "tribunal", label: "Applying to the tribunal" },
        { value: "other", label: "Another type of dispute" },
      ],
    },
    {
      name: "dispute_progress",
      required: false,
      prompt: "What have you done so far?",
      description: "This helps us identify the next step.",
      choices: [
        { value: "no-step", label: "Not started yet" },
        { value: "complaint", label: "Made a complaint" },
        { value: "negotiation", label: "Tried to negotiate" },
        { value: "formal", label: "Already in a formal process" },
      ],
      input: {
        label: "Any extra context",
        placeholder: "Add anything relevant about the dispute…",
      },
    },
  ],
  leaseExtension: [
    {
      name: "lease_extension_goal",
      required: true,
      prompt: "What are you trying to do with the lease?",
      description: "Tell us the main aim of your enquiry.",
      choices: [
        { value: "extend", label: "Extend the lease" },
        { value: "negotiate", label: "Negotiate terms or valuation" },
        { value: "eligibility", label: "Check if I am eligible" },
        { value: "process", label: "Understand the process" },
      ],
    },
    {
      name: "lease_extension_stage",
      required: false,
      prompt: "Have you already started the process?",
      description:
        "This tells us whether you need general guidance or next-step advice.",
      choices: [
        { value: "not-started", label: "Not started" },
        { value: "informal", label: "Had informal discussions" },
        { value: "formal", label: "Started a formal process" },
        { value: "received-offer", label: "Received an offer" },
      ],
      input: {
        label: "Extra information",
        placeholder: "Add any relevant lease or timeline details…",
      },
    },
  ],
  leaseholdEssentials: [
    {
      name: "leasehold_topic",
      required: true,
      prompt: "Which leasehold topic matters most to you?",
      description: "Choose the area you want to understand first.",
      choices: [
        { value: "rights", label: "Your rights and responsibilities" },
        { value: "reform", label: "Leasehold reform" },
        { value: "understanding", label: "Understanding the lease" },
        { value: "buying", label: "Buying a leasehold property" },
        { value: "other", label: "Something else" },
      ],
    },
    {
      name: "leasehold_needs",
      required: false,
      prompt: "What do you need help with right now?",
      description: "This helps us point you to the right information.",
      choices: [
        { value: "understanding", label: "Understanding the basics" },
        { value: "decision", label: "Making a decision" },
        { value: "problem", label: "Resolving a problem" },
        { value: "plan", label: "Planning next steps" },
      ],
      input: {
        label: "Tell us what you need",
        placeholder: "Add a few details about your concern…",
      },
    },
  ],
  sharedOwnership: [
    {
      name: "shared_ownership_stage",
      required: true,
      prompt: "Which shared ownership issue are you dealing with?",
      description:
        "Select the stage or topic that best matches your situation.",
      choices: [
        { value: "buying", label: "Buying a shared ownership home" },
        { value: "staircasing", label: "Staircasing or buying more shares" },
        { value: "selling", label: "Selling a shared ownership home" },
        { value: "costs", label: "Rent, service charges or repairs" },
        { value: "other", label: "Another shared ownership issue" },
      ],
    },
    {
      name: "shared_ownership_status",
      required: false,
      prompt: "What stage are you at?",
      description: "This helps us guide you to the right next step.",
      choices: [
        { value: "considering", label: "Thinking about it" },
        {
          value: "already-own",
          label: "I already own a shared ownership home",
        },
        { value: "in-process", label: "I am in the middle of a process" },
        { value: "issue", label: "I have a specific problem" },
      ],
      input: {
        label: "Add details",
        placeholder: "Tell us a bit more about what is happening…",
      },
    },
  ],
};

export type QuestionsByCategory = typeof questionsByCategory;

export default questionsByCategory;
