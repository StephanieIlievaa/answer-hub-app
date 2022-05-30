import React from "react";
import { Question } from "./Question";
import styles from "./QuestionContainer.module.scss";
import { Button } from "@mui/material";
interface Props {
  users: any;

}
export const QuestionContainer: React.FC<Props> = ({ users }): JSX.Element => {
  return (
    <div className={styles.container} >
      {users.map((user: any) => {
        return (
          <Question
            key={user.id}
            answers={0}
            minutes={10}
            id={user.id}
            question={user.question}
            xp={user.xp}
            name={user.name}
            avatar={user.avatarUrl}
          />

        );
      })}
    </div>
  );
};
