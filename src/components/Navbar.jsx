import Button from "./Button"

function Navbar() {
  return (
  <div className="max-w-screen-xl mx-auto justify-between  py-6 flex items-center border-b-[2px] border-b-zinc-700 ">
      <div 
      className="nleft flex items-center ">
        <img src="\Untitled.png"
         alt=""
         className="w-[100px]"/>
      <div className="links ml-20 text-white flex gap-10">
       {["Home", "Work", "Culture", "", "News"].map((elem,index)=>
         ( <a 
         className="text-sm flex items-center gap-1" 
         href="#" 
         key={index}>
          {elem.length === 0 ? (<span className="w-0.5 h-5 bg-zinc-700"></span>) : index === 1 && (<span style={{backgroundColor: "yellow"}} className="incline-block w-2 h-2 rounded-full "></span>)}
        {elem}
       </a>
      ))}
      </div>
    </div>
       <Button/>
 </div>
    
  )
}

export default Navbar