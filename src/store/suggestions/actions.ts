import { useAtom } from "jotai";
import { suggestionsAtom } from "./atom";
import { utilGenerateDateTime, utilGenerateUUID } from "@/utils";
import { useUserSelector } from "../user/selectors";
import { User } from "@/types";

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
        author: user as User,
        createdDateTime: utilGenerateDateTime(),
      },
    ]);
  };

  const removeSuggestion = (suggestionId: string) => {
    setSuggestions((prev) =>
      prev.filter((suggestion) => suggestion.id !== suggestionId)
    );
  };

  return { addSuggestion, removeSuggestion };
};
