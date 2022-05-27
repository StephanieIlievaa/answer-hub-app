import React from "react";

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
    <div>
      <h3>Question:{question}</h3>
      <p>XP:{xp}</p>
      <h5>{name}</h5>
      <img src={avatar} width="50" height="50" />
    </div>
  );
};
