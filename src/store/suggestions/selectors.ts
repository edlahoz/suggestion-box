import { useAtomValue } from "jotai";
import { suggestionsAtom } from "./atom";

// Selectors
export const useSuggestionsSelector = () => {
  const suggestions = useAtomValue(suggestionsAtom);
  return suggestions;
};
