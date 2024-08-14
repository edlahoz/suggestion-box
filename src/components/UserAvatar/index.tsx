import { User } from "@/types";

type UserAvatarProps = {
  author?: User;
};

export default function UserAvatar({ author }: UserAvatarProps) {
  if (!author) {
    return null;
  }
  return (
    <img
      src={`https://ui-avatars.com/api/?name=${author.nameFirst}+${author.nameLast}&background=random`}
      alt={author.nameFirst}
      className="w-8 h-8 rounded-full flex-shrink-0"
      title={`${author.nameFirst} ${author.nameLast}`}
    />
  );
}
