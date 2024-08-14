import { useEffect, useRef } from "react";
import { Thread, Comment } from "@/types";
import FormTextInput from "../FormTextInput";
import UserAvatar from "../UserAvatar";
import { utilFormatDate } from "@/utils";

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
      <section className="flex flex-col items-center pb-6 border-b border-gray-300">
        <h1 className="text-2xl font-semibold text-white mb-2">
          {thread?.title}
        </h1>
        <p className="text-base text-slate-400 text-center mb-4">
          {thread?.description}
        </p>
        <div className="flex items-center space-x-2">
          {thread?.author && <UserAvatar author={thread?.author} />}
          <span className="text-xs text-slate-400">
            {thread?.createdDateTime && utilFormatDate(thread.createdDateTime)}
          </span>
        </div>
      </section>
      <div className="flex-1 overflow-y-auto text-white">
        <ul className="mt-4">
          {comments?.map((comment) => (
            <li key={comment.id} className="my-4">
              <div className="flex items-center">
                <UserAvatar author={comment.author} />
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
