import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-4.1-mini": {
    id: "gpt-4.1-mini",
    name: "GPT-4.1-mini",
    maxLimit: 32768,
  },
  "gpt-4o": {
    id: "gpt-4o",
    name: "GPT-4 Omni",
    maxLimit: 4096,
  },
  "gpt-4": {
    id: "gpt-4",
    name: "GPT-4",
    maxLimit: 8192,
  },
  "o3-mini": {
    id: "o3-mini",
    name: "o3-mini",
    maxLimit: 8192,
  },
  "gpt-4.1": {
    id: "gpt-4.1",
    name: "GPT-4.1",
    maxLimit: 32768,
  },
  "gpt-4o-mini": {
    id: "gpt-4o-mini",
    name: "GPT-4o-mini",
    maxLimit: 100000,
  },
};
