import AllTasks from "@/components/task/AllTasks";
import Sidebar from "@/components/task/Sidebar";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <AllTasks />
      </div>
    </main>
  );
}
