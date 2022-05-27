import React from "react";
import { Question } from "./Question";

interface Props {
  users: any;
}

export const QuestionContainer: React.FC<Props> = ({ users }): JSX.Element => {
  return (
    <>
      {users.map((user: any) => {
        return <Question id={user.id} question={user.question} xp={user.xp} name={user.name} avatar={user.avatarUrl} />;
      })}
    </>
  );
};
