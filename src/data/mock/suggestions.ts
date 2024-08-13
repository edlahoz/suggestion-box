import { Thread } from "@/types";
import { users } from "@/data/mock/users";
import { utilGenerateUUID, utilGenerateDateTime } from "@/utils";

export const suggestions: Thread[] = [
  {
    id: utilGenerateUUID(),
    title: "First Suggestion",
    description: "This is the first suggestion",
    author: users[0],
    createdDateTime: utilGenerateDateTime(),
    comments: [
      {
        id: utilGenerateUUID(),
        body: "This is a comment",
        author: users[1],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is another comment",
        author: users[2],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is a third comment",
        author: users[0],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is a fourth comment",
        author: users[1],
        createdDateTime: utilGenerateDateTime(),
      },
    ],
  },
  {
    id: utilGenerateUUID(),
    title: "Second Suggestion",
    description: "This is the second suggestion",
    author: users[1],
    createdDateTime: utilGenerateDateTime(),
    comments: [
      {
        id: utilGenerateUUID(),
        body: "This is a comment",
        author: users[1],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is another comment",
        author: users[2],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is a third comment",
        author: users[0],
        createdDateTime: utilGenerateDateTime(),
      },
      {
        id: utilGenerateUUID(),
        body: "This is a fourth comment",
        author: users[1],
        createdDateTime: utilGenerateDateTime(),
      },
    ],
  },
];
