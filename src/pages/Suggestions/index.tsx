import { Outlet } from "react-router-dom";
import { useSuggestionsSelector } from "@/store/suggestions/selectors";
import { useSuggestionsActions } from "@/store/suggestions/actions";
import Threads from "@/components/Threads";

export default function Suggestions() {
  const suggestions = useSuggestionsSelector();
  const { addSuggestion, addRandomSuggestion } = useSuggestionsActions();

  return (
    <div className="flex h-screen">
      <Threads
        data={suggestions}
        title="Suggestions"
        path="/suggestions"
        addNewThread={addSuggestion}
        addRandomThread={addRandomSuggestion}
      />
      <Outlet />
    </div>
  );
}
