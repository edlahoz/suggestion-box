import { Outlet } from "react-router-dom";
import { useSuggestionsSelector } from "@/store/suggestions/selectors";
import Threads from "@/components/Threads";

export default function Suggestions() {
  const suggestions = useSuggestionsSelector();

  return (
    <div className="flex h-screen">
      <Threads data={suggestions} title="Suggestions" path="/suggestions" />
      <Outlet />
    </div>
  );
}
