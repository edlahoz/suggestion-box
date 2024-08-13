import { useAtomValue } from "jotai";
import { suggestionsAtom } from "./atom";

export const useSuggestionsSelector = () => {
  const suggestions = useAtomValue(suggestionsAtom);
  return suggestions;
};

export const useSuggestionById = (suggestionId: string) => {
  const suggestions = useAtomValue(suggestionsAtom);
  return suggestions.find((suggestion) => suggestion.id === suggestionId);
};
