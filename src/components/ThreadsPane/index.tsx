import { useEffect, useRef } from "react";
import { Thread, Comment } from "@/types";
import FormTextInput from "../FormTextInput";

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
  const commentsEndRef = useRef<HTMLLIElement | null>(null);

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

      <FormTextInput onSubmitText={(body) => onNewComment(body)} />
    </div>
  );
}
