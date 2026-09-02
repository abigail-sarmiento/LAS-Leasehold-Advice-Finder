import type { Category } from "../types/categories";

export type ClassificationResult = {
  category: Category;
  confidence: number;
};

export async function classifySituation(
  input: string,
): Promise<ClassificationResult> {
  const response = await fetch("/api/classify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });

  if (!response.ok) {
    throw new Error("Failed to classify situation");
  }

  return response.json();
}
