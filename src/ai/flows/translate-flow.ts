'use server';
/**
 * @fileOverview A Genkit flow for translating text content.
 *
 * This file defines a Genkit flow that takes a string of text (potentially HTML)
 * and a target language code, and returns the translated text.
 */

import { ai } from '@/ai/genkit';
import { 
    TranslateInputSchema, 
    type TranslateInput, 
    TranslateOutputSchema, 
    type TranslateOutput 
} from './translate-types';


// Exported wrapper function to be called from the client
export async function translate(input: TranslateInput): Promise<TranslateOutput> {
  return translateFlow(input);
}

// Define the Genkit prompt for translation
const translatePrompt = ai.definePrompt({
  name: 'translatePrompt',
  input: { schema: TranslateInputSchema },
  output: { schema: TranslateOutputSchema },
  prompt: `Translate the following text into the language specified by the code '{{targetLang}}'.
  
  IMPORTANT: 
  - Preserve all original HTML tags and structure exactly as they are.
  - Only translate the text content within the HTML elements.
  - Do not add or remove any HTML tags.
  - Return only the translated HTML content.

  Text to translate:
  ---
  {{{text}}}
  ---
  `,
});

// Define the Genkit flow for translation
const translateFlow = ai.defineFlow(
  {
    name: 'translateFlow',
    inputSchema: TranslateInputSchema,
    outputSchema: TranslateOutputSchema,
  },
  async (input) => {
    const { output } = await translatePrompt(input);
    if (!output) {
      throw new Error('Translation failed to produce an output.');
    }
    return output;
  }
);
