/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { useState } from 'react';

function Card({ width }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ backgroundColor: isHovered ? "#7443ff" : undefined, padding: "25px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-zinc-800 p-5 rounded-xl ${width} h-[20rem] sm:h-[30rem] flex flex-col justify-between select-none`}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>One Heading</h3>
          <FaArrowRightLong />
        </div>
        <h1 className="text-3xl font-medium mt-10">Anonymous heading</h1>
      </div>
      <div className="down w-full mt-60">
        <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
        <button 
          className="rounded-full py-2 px-5 my-2 border-[1px] border-zinc-50" 
          aria-label="Contact"
        >
          Contact
        </button>
        <p className="text-sm text-zinc-500 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
