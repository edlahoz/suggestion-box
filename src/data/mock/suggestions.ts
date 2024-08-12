import { Thread } from "@/types";

export const suggestions: Thread[] = [
  {
    id: "1",
    title: "First Suggestion",
    description: "This is the first suggestion",
    createdBy: "User1",
    createdDate: new Date().toISOString(),
    comments: [],
  },
  {
    id: "2",
    title: "Second Suggestion",
    description: "This is the second suggestion",
    createdBy: "User2",
    createdDate: new Date().toISOString(),
    comments: [],
  },
];
