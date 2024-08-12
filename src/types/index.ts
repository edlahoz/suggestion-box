export type User = {
  id: string;
  nameFirst: string;
  nameLast: string;
  email: string;
};

export type Comment = {
  id: string;
  body: string;
  author: User;
  createdDateTime: string;
};

export type Thread = {
  id: string;
  title: string;
  description: string;
  author: User;
  createdDateTime: string;
  comments: Comment[];
};
