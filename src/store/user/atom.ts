import { atom } from "jotai";
import { User } from "@/types";
import { users } from "@/data/mock/users";

export const userAtom = atom<User>(users[0]);
