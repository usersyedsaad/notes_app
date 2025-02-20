import Link from "next/link";
import React from "react";

const Mainpage = () => {
  return (
    <div className="bg-white flex items-center justify-center w-screen h-screen">
      <Link
        href="/Notes"
        className="font-poppins text-3xl font-extrabold hover:text-yellow-400 hover:border-yellow-400 hover:border-4 hover:p-4 rounded-full"
      >
        Notes App
      </Link>
    </div>
  );
};

export default Mainpage;
