
function Footer() {
  return (
    <div className="w-full">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight text-zinc-400">
           Sunshine.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-400 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
            ))}
          </div>
         
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, rem.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;