import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

type FormTextInputProps = {
  onSubmitText: (body: string) => void;
  onCancel?: () => void;
};

export default function FormTextInput({
  onSubmitText,
  onCancel,
}: FormTextInputProps) {
  const [commentInput, setCommentInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCommentInput(event.target.value);
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && commentInput.trim()) {
      onSubmitText(commentInput);
      setCommentInput("");
    }
  }

  return (
    <div className="flex items-center">
      {onCancel && (
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-red-600 p-2"
        >
          <FaTimes />
        </button>
      )}
      <input
        ref={inputRef}
        name="text"
        value={commentInput}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        type="text"
        placeholder="Type anything"
        className="w-full p-2 border rounded ml-2"
        autoComplete="off"
      />
    </div>
  );
}
