import { useAtom } from "jotai";
import { userAtom } from "./atom";
import { User } from "@/types";

export const useUserActions = () => {
  const [, setUser] = useAtom(userAtom);

  const updateUser = (user: User) => {
    setUser(user);
  };

  return { updateUser };
};
