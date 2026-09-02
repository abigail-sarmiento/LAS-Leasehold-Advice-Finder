import { GoogleGenAI } from "@google/genai";

const categories = [
  "buildingManagement",
  "buyingAndSelling",
  "costsAndCharges",
  "disputes",
  "leaseExtension",
  "leaseholdEssentials",
  "sharedOwnership",
];

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not configured");
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default {
  async fetch(request: Request) {
    if (request.method !== "POST") {
      return Response.json({ error: "Method not allowed" }, { status: 405 });
    }

    try {
      const { input } = await request.json();

      if (typeof input !== "string" || !input.trim()) {
        return Response.json({ error: "Input is required" }, { status: 400 });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: input,
        config: {
          systemInstruction: `
You are a classifier for a leasehold information service.

Classify the user's situation into exactly one of these categories:

- buildingManagement: management, maintenance, repairs, or running of a leasehold building or block
- buyingAndSelling: buying, selling, or transferring a leasehold property
- costsAndCharges: service charges, administration charges, ground rent, or other leasehold costs
- disputes: disagreements, complaints, or conflicts involving a landlord, freeholder, managing agent, or other party
- leaseExtension: extending or renewing a lease
- leaseholdEssentials: general questions about leasehold ownership, rights, responsibilities, or terminology
- sharedOwnership: questions specifically related to shared ownership

Return the category that best matches the user's main issue.
          `,
          responseMimeType: "application/json",
          responseSchema: {
            type: "object",
            properties: {
              category: {
                type: "string",
                enum: categories,
              },
              confidence: {
                type: "number",
              },
            },
            required: ["category", "confidence"],
          },
        },
      });

      return Response.json(JSON.parse(response.text || "{}"));
    } catch (error) {
      console.error("Classification error:", error);

      return Response.json(
        { error: "Failed to classify situation" },
        { status: 500 },
      );
    }
  },
};
