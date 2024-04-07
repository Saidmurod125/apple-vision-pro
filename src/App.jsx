
export const App = () => {
  return (
    <div className="container mx-auto bg-slate-650">
    <div className="content">
      <div className="flex justify-between pt-12">
        <div className="flex justify-between gap-60">
          <i className=" text-[40px] fa-brands fa-apple"></i>
          <div className="">
            <ul className="flex items-center gap-12 ">
              <li className="text-xl text-yellow-500">
                <a href="">Store</a>
              </li>
              <li className="text-xl text-gray-500">
                <a href="">Mac</a>
              </li>
              <li className="text-xl text-blue-500">
                <a href="">iPad</a>
              </li>
              <li className="text-xl text-black">
                <a href="">iPhone</a>
              </li>
              <li className="text-xl text-fuchsia-500">
                <a href="">Watch</a>
              </li>
              <li className="text-xl text-neutral-500">
                <a href="">Vision</a>
              </li>
              <li className="text-xl text-red-500">
                <a href="">AirPods</a>
              </li>
              <li className="text-xl text-orange-500">
                <a href="">TV & Home</a>
              </li>
              <li className="text-xl text-amber-600">
                <a href="">Entertainment</a>
              </li>
              <li className="text-xl text-amber-500">
                <a href="">Accessories</a>
              </li>
              <div className="flex gap-12">
                <i className=" text-[25px] fa-solid fa-magnifying-glass"></i>
                <i className=" text-[25px] fa-solid fa-bag-shopping"></i>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between pt-8">
          <h1 className="pt-6 text-3xl text-slate-400 ">Apple Vision Pro</h1>
          <div className="">
            <ul className="flex gap-12 pt-4">
              <li className="pt-3 text-xl">Overview</li>
              <li className="pt-3 text-xl">Guided Tour</li>
              <li className="pt-3 text-xl "> TourTech Specs</li>
              <div className="flex justify-between gap-8">
                <button className="p-[10px] px-8 border rounded-2xl text-xl hover:bg-slate-700 text-slate-400">
                  Book a demo
                </button>
                <button className="p-[8px] px-8 border rounded-xl bg-cyan-900 text-slate-400 text-lg">
                  Buy
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
