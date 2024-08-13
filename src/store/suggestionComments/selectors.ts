import { useAtomValue } from "jotai";
import { suggestionCommentsAtom } from "./atom";

export const useSuggestionCommentsSelector = () => {
  const suggestionsComments = useAtomValue(suggestionCommentsAtom);
  return suggestionsComments;
};
