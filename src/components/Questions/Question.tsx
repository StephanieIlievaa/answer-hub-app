import React from "react";
import styles from "./Question.module.scss";

interface Props {
  id: number;
  question: string;
  xp: number;
  name: string;
  avatar: string;
}

export const Question: React.FC<Props> = ({
  id,
  question,
  xp,
  name,
  avatar,
}): JSX.Element => {
  return (
    <div className={styles.questionItem}>
      <img src="./icon-question.png" alt="icon"  width="50" height="50"/>
      <div className={styles.question}>{question}</div>
      <p>XP:{xp}</p>
      <h5>{name}</h5>
      <img src={avatar} width="50" height="50" />
    </div>
  );
};
