"use client";

import React, { useState } from "react";
import Input from "./components/Input";
import TodoItem from "./components/ToDoItem";

const ToDoApp = () => {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert("Please enter a note");
      return;
    }

    const newNote = { id: Date.now(), text: input };
    setNotes((prev) => [...prev, newNote]);
    setInput("");
  };

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) element.classList.add("line-through");

    setTimeout(() => {
      setNotes((prev) => prev.filter((note) => note.id !== id));
    }, 2000);
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-yellow-200 flex items-center justify-center relative">
      <div className="max-h-[80vh] max-w-[80vw] min-w-min min-h-max bg-white h-[30vmax] relative rounded-xl overflow-hidden">
        <div className="max-w-full w-full flex items-center justify-center h-auto bg-yellow-400 text-white text-3xl font-bold font-poppins p-2 ">
          <h1>Notes App</h1>
        </div>

        <div className="h-auto max-w-full overflow-hidden">
          <Input
            handleSubmit={handleSubmit}
            input={input}
            setInput={setInput}
          />
        </div>
        <div className="w-full h-full text-black p-2 flex flex-col relative mt-2 overflow-y-scroll">
          {notes.map((note) => {
            return (
              <TodoItem
                key={note.id}
                handleClick={handleClick}
                id={note.id}
                note={note.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
