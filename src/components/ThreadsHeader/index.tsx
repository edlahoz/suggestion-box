import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ThreadsHeaderProps = {
  title: string;
  isPanelOpen: boolean;
  togglePanel: () => void;
};

export default function ThreadsHeader({
  title,
  isPanelOpen,
  togglePanel,
}: ThreadsHeaderProps) {
  return (
    <div
      className={`flex justify-${
        isPanelOpen ? "between" : "center"
      } items-center mb-2`}
    >
      {isPanelOpen && <h1 className="text-lg font-bold">{title}</h1>}
      <button
        onClick={togglePanel}
        className="text-blue-600 hover:text-blue-800 transition-transform duration-300"
      >
        {isPanelOpen ? (
          <FaArrowLeft className="text-xl" />
        ) : (
          <FaArrowRight className="text-xl" />
        )}
      </button>
    </div>
  );
}
