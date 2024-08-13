import { useAtomValue } from "jotai";
import { userAtom } from "./atom";

// Selectors
export const useUserSelector = () => {
  const user = useAtomValue(userAtom);
  return user;
};