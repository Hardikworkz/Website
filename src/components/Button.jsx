/* eslint-disable react/prop-types */
import { FiCornerDownRight } from "react-icons/fi";
function Button({ title="Get Started" }) {
  return (
    <div
    className="min-w-40  px-4 py-2 bg-zinc-100 rounded-full flex justify-between items-center text-black  "
    >
        <span 
        className="text-sm font-medium"
        >{title}</span>
        <FiCornerDownRight />
    </div>
  )
}

export default Button