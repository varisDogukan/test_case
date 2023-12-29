import React from "react";

type Props = { title: string; smallTitle: string };

function Title({ title, smallTitle }: Props) {
  return (
    <div className="title">
      <h4>{title}</h4>
      <p>{smallTitle}</p>
    </div>
  );
}

export default Title;
