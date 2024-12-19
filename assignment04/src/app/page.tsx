export default function Home() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] grid-rows-[1fr_2fr_1fr] gap-4 p-4 h-screen bg-white">
      {/* 1st column */}

      <div className="row-span-3 bg-[#FFD900] flex items-start pl-4 pt-4 text-black text-2xl">
        Nav
      </div>

      {/* 2nd column, header takes 2nd and 3rd col as well */}
      <div className="col-span-2 bg-[#FFD900] flex items-start pl-4 pt-4 text-black text-2xl">
        Header
      </div>

      <div className="bg-[#FFD900] flex items-start pl-4 pt-4 text-black text-2xl">
        Article
      </div>

      <div className="row-span-2 bg-[#FFD900] flex items-start pl-4 pt-4 text-black text-2xl">
        Ads
      </div>

      {/* 3rd column */}
      <div className="bg-[#FFD900] flex items-start pl-4 pt-4 text-black text-2xl">
        Footer
      </div>
    </div>
  );
}
