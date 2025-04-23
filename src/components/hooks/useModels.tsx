import { OpenAIChatModels, OpenAIModel } from "@/utils/OpenAI";
import React from "react";
import { useAuth } from "@/context/AuthProvider";

/*
  Simple hook to fetch models from the API
*/
export default function useModels() {
  const { token } = useAuth();
  const [models, setModels] = React.useState<OpenAIModel[]>([]);
  const [loadingModels, setLoadingModels] = React.useState(false);

  React.useEffect(() => {
    if (!token) {
      setModels(Object.values(OpenAIChatModels));
      return;
    }

    const fetchModels = async () => {
      setLoadingModels(true);
      const models = await fetch("https://api.openai.com/v1/models", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res.data);
          return res.data;
        });

      setModels(models || []);
      setLoadingModels(false);
    };

    fetchModels();
  }, [token]);

  return { models, loadingModels };
}
