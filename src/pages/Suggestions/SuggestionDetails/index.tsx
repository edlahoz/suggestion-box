import { useParams } from "react-router-dom";
import ThreadsPane from "@/components/ThreadsPane";
import { useSuggestionCommentsActions } from "@/store/suggestionComments/actions";
import { useEffect } from "react";
import { useSuggestionCommentsSelector } from "@/store/suggestionComments/selectors";
import { useSuggestionById } from "@/store/suggestions/selectors";

export default function SuggestionDetails() {
  const { suggestionId } = useParams<{ suggestionId: string }>();
  const { loadSuggestionComments, addSuggestionComment } =
    useSuggestionCommentsActions();
  const suggestion = useSuggestionById(suggestionId as string);
  const comments = useSuggestionCommentsSelector();

  useEffect(() => {
    if (suggestionId) {
      loadSuggestionComments(suggestionId);
    }
  }, [suggestionId]);

  return (
    <ThreadsPane
      thread={suggestion}
      comments={comments}
      onNewComment={addSuggestionComment}
    />
  );
}
