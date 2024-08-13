import { useState, useEffect, useRef } from "react";
import { Thread, Comment } from "@/types";

type ThreadsPaneProps = {
  thread?: Thread;
  comments?: Comment[];
  onNewComment: (body: string) => void;
};

export default function ThreadsPane({
  comments,
  thread,
  onNewComment,
}: ThreadsPaneProps) {
  const [commentInput, setCommentInput] = useState("");
  const commentsEndRef = useRef<HTMLLIElement | null>(null);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && commentInput.trim()) {
      event.preventDefault(); // Prevent the form from submitting
      onNewComment(commentInput);
      setCommentInput(""); // Clear the input field
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCommentInput(event.target.value);
  }

  useEffect(() => {
    // Scroll to the bottom of the comments list when a new comment is added
    if (commentsEndRef.current) {
      commentsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);

  return (
    <div className="flex-1 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto text-white">
        <h1 className="text-lg font-bold">{thread?.title}</h1>
        <p className="text-sm">{thread?.description}</p>
        <ul className="mt-4">
          {comments?.map((comment) => (
            <li key={comment.id} className="my-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={`https://ui-avatars.com/api/?name=${comment.author.nameFirst}+${comment.author.nameLast}&background=random`}
                    alt={comment.author.nameFirst}
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-sm">{comment.body}</p>
                </div>
              </div>
            </li>
          ))}
          <li ref={commentsEndRef}></li> {/* Placeholder to scroll to */}
        </ul>
      </div>

      <input
        name="comment"
        value={commentInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Enter your comment"
        className="w-full p-2 border rounded"
        autoComplete="off"
      />
    </div>
  );
}
