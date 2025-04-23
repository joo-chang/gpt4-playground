import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import Dropdown from "./../../../input/Dropdown";
import useModels from "./../../../hooks/useModels";
import { OpenAIConfig } from "@/utils/OpenAI";

type Props = {};

export default function CurrentModel({}: Props) {
  const { config, updateConfig } = useOpenAI();
  const { models, loadingModels } = useModels();

  const handleUpdateConfig = <K extends keyof OpenAIConfig>(
    id: K,
    value: OpenAIConfig[K] | undefined
  ) => {
    updateConfig({
      [id]: value,
    });
  };

  return (
    <div className="p-1">
      <h3 className="dark text-sm font-medium">CURRENT MODEL</h3>
      <Dropdown
        options={
          loadingModels
            ? []
            : (models.map(({ id }) => ({ label: id, value: id })) as any)
        }
        className="brder-white/10 "
        value={config.model}
        onSelect={(option) => handleUpdateConfig("model", option)}
      />
    </div>
  );
}
