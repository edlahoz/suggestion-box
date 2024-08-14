import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import FormTextInput from "@/components/FormTextInput";

type ThreadsFooterProps = {
  isDisabled: boolean;
  onAddNewThread?: (title: string) => void;
  onAddRandomThread?: () => void;
};

export default function ThreadsFooter({
  isDisabled,
  onAddNewThread,
  onAddRandomThread,
}: ThreadsFooterProps) {
  const [isAddingNewThread, setIsAddingNewThread] = useState(false);

  return (
    <div className="mt-auto">
      {isAddingNewThread ? (
        <FormTextInput
          onSubmitText={(title) => {
            onAddNewThread?.(title);
            setIsAddingNewThread(false);
          }}
          onCancel={() => setIsAddingNewThread(false)}
        />
      ) : (
        <>
          {!isDisabled && (
            <>
              {onAddRandomThread && (
                <button
                  onClick={onAddRandomThread}
                  className="mt-2 relative flex items-center justify-center p-2 w-full text-white font-bold rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-110"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-75 animate-pulse"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-50 blur-sm"></span>
                  <span className="relative z-10">🎉 Surprise Thread! 🎉</span>
                </button>
              )}
              <button
                disabled={isDisabled}
                onClick={() => setIsAddingNewThread(true)}
                className={`mt-2 flex items-center justify-center p-2 w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 ${
                  isDisabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FaPlus className="mr-2" />
                {isDisabled ? "Adding New Suggestion..." : "New Suggestion"}
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
