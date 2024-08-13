import { useAtomValue } from "jotai";
import { userAtom } from "./atom";

export const useUserSelector = () => {
  const user = useAtomValue(userAtom);
  return user;
};
