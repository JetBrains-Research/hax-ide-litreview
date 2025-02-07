import { z } from "zod";
import structuredFields from "./structured_fields.json";

const defaultFields = {
  Paper: z.string(),               // JSON uses "Title" instead of "Paper"
  DOI: z.string(),                 // JSON uses "DOI" instead of "URL"
  Date: z.number(),                // JSON uses "Date" instead of "Year"
  ID: z.string(),
  // JSON has Authors as an array, so update the type:
  Authors: z.array(z.string()).optional(),
  Abstract: z.string().optional(),
};

const dimensionFields = structuredFields.reduce((schema, field) => {
  return {
    ...schema,
    [field.name]: z.array(z.string()),
  };
}, {});

export const paperSchema = z.object({
  ...defaultFields, // Basic fields for each paper
  ...dimensionFields, // All dimensions
});

export type Paper = z.infer<typeof paperSchema>;

export const groupedFieldsByCategory: Record<
  string,
  (typeof structuredFields)[number][]
> = {};

structuredFields.forEach((field) => {
  if (groupedFieldsByCategory[field.category]) {
    groupedFieldsByCategory[field.category].push(field);
  } else {
    groupedFieldsByCategory[field.category] = [field];
  }
});
