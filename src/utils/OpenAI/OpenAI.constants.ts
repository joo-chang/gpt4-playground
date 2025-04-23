import { OpenAIModel } from "./OpenAI.types";

export const OpenAIChatModels: Record<string, OpenAIModel> = {
  "gpt-4o": {
    id: "gpt-4o",
    name: "GPT-4 Omni",
  },
  "gpt-4": {
    id: "gpt-4",
    name: "GPT-4",
  },
  "o3-mini": {
    id: "o3-mini",
    name: "o3-mini",
  },
};
