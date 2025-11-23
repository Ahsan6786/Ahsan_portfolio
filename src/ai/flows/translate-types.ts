import { z } from 'zod';

// Define the input schema for the translation flow
export const TranslateInputSchema = z.object({
  text: z.string().describe('The text content to be translated. This can include HTML markup.'),
  targetLang: z.string().describe('The target language code (e.g., "hi" for Hindi, "ur" for Urdu).'),
});
export type TranslateInput = z.infer<typeof TranslateInputSchema>;

// Define the output schema for the translation flow
export const TranslateOutputSchema = z.object({
  translatedText: z.string().describe('The translated text.'),
});
export type TranslateOutput = z.infer<typeof TranslateOutputSchema>;
