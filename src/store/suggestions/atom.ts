import { atom } from "jotai";
import { Thread } from "@/types";
import { suggestions } from "@/data/mock/suggestions";

export const suggestionsAtom = atom<Thread[]>(suggestions);
