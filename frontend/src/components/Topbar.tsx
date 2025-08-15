
export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-[#A6B28B]  text-[#F9F6F3] shadow p-4">
      <h1 className="text-lg font-bold">Instructor Overview</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium"></span>
        <button className="text-red-600 font-semibold">Logout</button>
      </div>
    </header>
  );
}
