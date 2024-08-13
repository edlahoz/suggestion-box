import { atom } from "jotai";
import { Thread } from "@/types";
import { mockSuggestions } from "@/data/mock/suggestions";

export const suggestionsAtom = atom<Thread[]>(mockSuggestions);
