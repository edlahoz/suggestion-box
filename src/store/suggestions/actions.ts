import { useAtom } from "jotai";
import { suggestionsAtom } from "./atom";
import { utilGenerateDateTime, utilGenerateUUID } from "@/utils";
import { useUserSelector } from "../user/selectors";

export const useSuggestionsActions = () => {
  const user = useUserSelector();
  const [, setSuggestions] = useAtom(suggestionsAtom);

  const addSuggestion = (title: string, description: string) => {
    setSuggestions((prev) => [
      ...prev,
      {
        id: utilGenerateUUID(),
        title,
        description,
        author: user,
        createdDateTime: utilGenerateDateTime(),
      },
    ]);
  };

  const removeSuggestion = (suggestionId: string) => {
    setSuggestions((prev) =>
      prev.filter((suggestion) => suggestion.id !== suggestionId)
    );
  };

  const addComment = (suggestionId: string, body: string) => {
    setSuggestions((prev) =>
      prev.map((suggestion) =>
        suggestion.id === suggestionId
          ? {
              ...suggestion,
              comments: [
                ...(suggestion.comments || []),
                {
                  id: utilGenerateUUID(),
                  body,
                  author: user,
                  createdDateTime: utilGenerateDateTime(),
                },
              ],
            }
          : suggestion
      )
    );
  };

  return { addSuggestion, removeSuggestion, addComment };
};
