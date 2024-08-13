import { Thread } from "@/types";
import { users } from "@/data/mock/users";

export const suggestions: Thread[] = [
  {
    id: "1",
    title: "First Suggestion",
    description: "This is the first suggestion",
    author: users[0],
    createdDateTime: new Date().toISOString(),
    comments: [
      {
        id: "1",
        body: "This is a comment",
        author: users[1],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "2",
        body: "This is another comment",
        author: users[2],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "3",
        body: "This is a third comment",
        author: users[0],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "4",
        body: "This is a fourth comment",
        author: users[1],
        createdDateTime: new Date().toISOString(),
      },
    ],
  },
  {
    id: "2",
    title: "Second Suggestion",
    description: "This is the second suggestion",
    author: users[1],
    createdDateTime: new Date().toISOString(),
    comments: [
      {
        id: "1",
        body: "This is a comment",
        author: users[1],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "2",
        body: "This is another comment",
        author: users[2],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "3",
        body: "This is a third comment",
        author: users[0],
        createdDateTime: new Date().toISOString(),
      },
      {
        id: "4",
        body: "This is a fourth comment",
        author: users[1],
        createdDateTime: new Date().toISOString(),
      },
    ],
  },
];
