import { User } from "@/types";
import { utilGenerateUUID } from "@/utils";

export const users: User[] = [
  {
    id: utilGenerateUUID(),
    nameFirst: "User",
    nameLast: "One",
    email: "user@one.com",
  },
  {
    id: utilGenerateUUID(),
    nameFirst: "User",
    nameLast: "Two",
    email: "user@two.com",
  },
  {
    id: utilGenerateUUID(),
    nameFirst: "User",
    nameLast: "Three",
    email: "user@three.com",
  },
];
