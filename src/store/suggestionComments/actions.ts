import { useState } from "react";
import { useAtom } from "jotai";
import { suggestionCommentsAtom } from "./atom";
import {
  mockSuggestionComments,
  mockAddSuggestionComment,
} from "@/data/mock/suggestions";
import { Comment, User } from "@/types";
import { utilGenerateDateTime, utilGenerateUUID } from "@/utils";
import { useUserSelector } from "@/store/user/selectors";

export const useSuggestionCommentsActions = () => {
  const [activeSuggestionId, setActiveSuggestionId] = useState<string>("");
  const [, setSuggestionComments] = useAtom(suggestionCommentsAtom);
  const author = useUserSelector() as User;

  const loadSuggestionComments = (suggestionId: string) => {
    setActiveSuggestionId(suggestionId);
    setSuggestionComments(
      mockSuggestionComments.find(
        (suggestionComments) => suggestionComments.suggestionId === suggestionId
      )?.comments || []
    );
  };

  const addSuggestionComment = (body: string) => {
    const newComment: Comment = {
      id: utilGenerateUUID(),
      body,
      author,
      createdDateTime: utilGenerateDateTime(),
    };

    mockAddSuggestionComment(activeSuggestionId, newComment);
    setSuggestionComments((comments) => [...(comments || []), newComment]);
  };

  return { loadSuggestionComments, addSuggestionComment };
};
