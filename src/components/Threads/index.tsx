import { useEffect, useRef, useState } from "react";
import { Thread } from "@/types";
import { Link, useLocation } from "react-router-dom";
import ThreadsHeader from "@/components/ThreadsHeader";
import ThreadsFooter from "@/components/ThreadsFooter";
import { utilFormatDate } from "@/utils";

type ThreadsProps = {
  data: Thread[];
  title: string;
  path: string;
  addNewThread?: (title: string) => void;
  addRandomThread?: () => void;
};

export default function Threads({
  data,
  title,
  path,
  addNewThread,
  addRandomThread,
}: ThreadsProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const { pathname } = useLocation();
  const listRef = useRef<HTMLDivElement>(null);

  const togglePanel = () => setIsPanelOpen((prev) => !prev);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [data]);

  return (
    <div
      className={`relative ${
        isPanelOpen ? "w-[300px]" : "w-16"
      } bg-gray-200 flex flex-col transition-all duration-300 ease-in-out`}
    >
      <ThreadsHeader
        title={title}
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
      />

      {isPanelOpen && (
        <>
          <div ref={listRef} className="flex-1 overflow-y-auto">
            <ul>
              {data.map((thread) => {
                const isActive = pathname === `${path}/${thread.id}`;
                return (
                  <li
                    key={thread.id}
                    className="flex flex-col items-start border-t-2 border-gray-300 py-2 pl-2"
                  >
                    <Link
                      to={`${path}/${thread.id}`}
                      className={`text-blue-600 hover:underline ${
                        isActive ? "font-bold underline text-blue-800" : ""
                      }`}
                    >
                      {thread.title}
                    </Link>
                    <span className="text-xs text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                      {utilFormatDate(thread.createdDateTime)}
                      {" - "}
                      {thread.author.nameFirst} {thread.author.nameLast}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <ThreadsFooter
            isDisabled={false}
            onAddNewThread={addNewThread}
            onAddRandomThread={addRandomThread}
          />
        </>
      )}
    </div>
  );
}
