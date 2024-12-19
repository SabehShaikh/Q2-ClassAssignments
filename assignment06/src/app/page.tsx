export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-[1fr_2fr_1fr_1fr] gap-4 h-screen p-4 bg-[#2E3639]">
      <div className="col-span-3  bg-[#8572DE] flex justify-center items-center text-white text-2xl">
        Header
      </div>

      <div className="row-span-2 bg-[#39D0C7] flex justify-center items-center text-white text-2xl">
        Sidebar
      </div>

      <div className="col-span-2 bg-[#22A6FB] flex justify-center items-center text-white text-2xl">
        Content-1
      </div>

      <div className="bg-[#22A6FB] flex justify-center items-center text-white text-2xl">
        Content-2
      </div>

      <div className="bg-[#22A6FB] flex justify-center items-center text-white text-2xl">
        Content-3
      </div>

      <div className="col-span-3 bg-[#8572DE] flex justify-center items-center text-white text-2xl">
        Footer
      </div>
    </div>
  );
}
