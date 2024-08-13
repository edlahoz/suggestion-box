import { useState } from "react";
import { Thread } from "@/types";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ThreadsProps = {
  data: Thread[];
  title: string;
  path: string;
};

export default function Threads({ data, title, path }: ThreadsProps) {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const togglePanel = () => {
    setIsPanelOpen((prev) => !prev);
  };
  return (
    <div
      className={`relative ${
        isPanelOpen ? "w-[300px]" : "w-16"
      } bg-gray-200 p-4 border-r border-gray-300 flex flex-col transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={togglePanel}
        className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 transition-transform duration-300"
      >
        {isPanelOpen ? (
          <FaArrowLeft className="text-xl" />
        ) : (
          <FaArrowRight className="text-xl" />
        )}
      </button>
      {isPanelOpen && (
        <>
          <div className="flex-1 overflow-y-auto">
            <h1 className="text-lg font-bold">{title}</h1>
            <ul>
              {data.map((thread) => (
                <li key={thread.id} className="my-2">
                  <Link
                    to={`${path}/${thread.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {thread.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-gray-300 p-4 bg-gray-100">
            <p className="text-sm text-gray-600">Left Panel Footer</p>
          </div>
        </>
      )}
    </div>
  );
}
