import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
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
};
