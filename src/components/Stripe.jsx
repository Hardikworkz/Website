
/* eslint-disable react/prop-types */


function Stripe({ val }) {
  console.log(val); 
  return (
    <div className="min-w-[20em] px-8 py-4 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between">
      <img className="h-6 " src={val.url} alt={`Logo ${val.number}`} />
      <span className="text-white font-semibold text-lg">{val.number}</span>
    </div>
  );
}

export default Stripe;