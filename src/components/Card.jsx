/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width}) {
  return (
      <div className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div className="w-full">
        <div className=" w-full flex  items-center justify-between ">
           <h3>One Heading</h3>
            <FaArrowRightLong/>
        </div>
        <h1 className="text-3xl font-medium mt-10 ">Anonymous heading</h1>
        </div>
        <div className="down w-full mt-60">
            <h1 className="text-6xl font-semibold tracking-tight leading-none ">Start a project</h1>
        <button className="rounded-full py-2 px-5 my-2  border-[1px] border-zinc-50 ">Contact</button>
        <p
        className="text-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
  )
}

export default Card