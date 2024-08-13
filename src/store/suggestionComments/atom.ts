import { atom } from "jotai";
import { Comment } from "@/types";

export const suggestionCommentsAtom = atom<Comment[]>();
