import React from "react";
import { styleText } from "util";

const TodoItem = ({ note, id, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(id)}
      className="overflow-clip flex flex-col gap-2 pl-2"
    >
      <li id={id} className="list-decimal list-inside  font-semibold">
        {note}
      </li>
    </div>
  );
};

export default TodoItem;
