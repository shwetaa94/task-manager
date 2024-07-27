import AllTasks from "@/components/task/AllTasks";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-screen h-full flex gap-1 bg-whitesmoke-100 ">
      <div className="w-[20%] border ">
        <Sidebar />
      </div>
      <div className="w-[75%] ">
        <AllTasks />
      </div>
    </main>
  );
}
