import React from "react";

const Input = ({ input, setInput, handleSubmit }) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="p-2 max-w-full w-full flex items-center justify-center mt-2 gap-3 "
    >
      <input
        className="border border-dotted border-yellow-400 focus:outline-yellow-400  p-2 max-w-prose text-black w-[60%] rounded-xl"
        type="text"
        placeholder="Add a note"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-yellow-400 rounded-xl p-2 text-white font-semibold"
      >
        Add
      </button>
    </form>
  );
};

export default Input;
