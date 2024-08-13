import { Thread, Comment } from "@/types";
import { users } from "@/data/mock/users";
import { utilGenerateUUID, utilGenerateDateTime } from "@/utils";
import { faker } from "@faker-js/faker";

const mockHardcodedSuggestion: Thread = {
  id: "123456789-abcdefghjklmnopqrstuvwxyz",
  title: "HARDCODED Suggestion (try opening this deep link and refreshing)",
  description:
    "This will always be the first suggestion and supports deeplinking",
  author: users[Math.floor(Math.random() * users.length)],
  createdDateTime: utilGenerateDateTime(),
};

const generateMockSuggestions = (count: number): Thread[] => {
  return Array.from({ length: count }, () => ({
    id: utilGenerateUUID(),
    title: faker.finance.accountName(),
    description: faker.commerce.productDescription(),
    author: users[Math.floor(Math.random() * users.length)],
    createdDateTime: utilGenerateDateTime(),
  }));
};

const generateMockSuggestionComments = (
  suggestions: Thread[],
  commentsPerSuggestion: number
) => {
  return suggestions.map((suggestion) => ({
    suggestionId: suggestion.id,
    comments: Array.from({ length: commentsPerSuggestion }, () => ({
      id: utilGenerateUUID(),
      body: faker.lorem.paragraph({ min: 1, max: 8 }),
      author: users[Math.floor(Math.random() * users.length)],
      createdDateTime: utilGenerateDateTime(),
    })),
  }));
};

export let mockSuggestions = [
  mockHardcodedSuggestion,
  ...generateMockSuggestions(10),
];
export let mockSuggestionComments = generateMockSuggestionComments(
  mockSuggestions,
  8
);

export function mockAddSuggestionComment(
  suggestionId: string,
  comment: Comment
) {
  mockSuggestionComments = mockSuggestionComments.map((suggestion) => {
    if (suggestion.suggestionId === suggestionId) {
      return {
        ...suggestion,
        comments: [...suggestion.comments, comment],
      };
    }
    return suggestion;
  });
}

export function mockAddSuggestion(suggestion: Thread) {
  mockSuggestions = [...mockSuggestions, suggestion];
}
