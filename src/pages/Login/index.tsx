import { useNavigate, useLocation } from "react-router-dom";
import { useUserActions } from "@/store/user/actions";
import { users } from "@/data/mock/users";
import { useSuggestionById } from "@/store/suggestions/selectors";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUser } = useUserActions();

  // Extract the suggestion ID from the stored location, if available
  const suggestionId = location.state?.from?.pathname?.split("/").pop();
  const suggestionExists = suggestionId
    ? useSuggestionById(suggestionId)
    : null;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUser = users.find((user) => user.id === event.target.value);
    if (selectedUser) {
      updateUser(selectedUser);

      // If the suggestion exists, navigate to the deep link; otherwise, navigate to suggestions as usual
      const redirectPath = suggestionExists
        ? location.state?.from?.pathname
        : "/suggestions";
      navigate(redirectPath);
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center">
      <select
        onChange={handleChange}
        className="max-w-md w-full shadow-lg p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.nameFirst} {user.nameLast}
          </option>
        ))}
      </select>
    </div>
  );
}
