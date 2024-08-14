import { useAtom } from "jotai";
import { suggestionsAtom } from "./atom";
import { utilGenerateDateTime, utilGenerateUUID } from "@/utils";
import { useUserSelector } from "../user/selectors";
import { Thread, User } from "@/types";
import { mockAddSuggestion } from "@/data/mock/suggestions";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

export const useSuggestionsActions = () => {
  const user = useUserSelector();
  const [, setSuggestions] = useAtom(suggestionsAtom);
  const navigate = useNavigate();

  const addSuggestion = (title: string) => {
    const newSuggestion: Thread = {
      id: utilGenerateUUID(),
      title,
      description: faker.commerce.productDescription(),
      author: user as User,
      createdDateTime: utilGenerateDateTime(),
    };
    mockAddSuggestion(newSuggestion);
    setSuggestions((suggestions) => [...suggestions, newSuggestion]);
    navigate(`/suggestions/${newSuggestion.id}`);
  };

  const addRandomSuggestion = () => {
    addSuggestion(faker.hacker.phrase());
  };

  return { addSuggestion, addRandomSuggestion };
};
