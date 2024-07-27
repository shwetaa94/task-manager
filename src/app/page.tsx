import AllTasks from "@/components/task/AllTasks";
import Sidebar from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="w-screen h-screen flex bg-whitesmoke-100 ">
      <div className="w-[18%]">
        <Sidebar />
      </div>
      <div className="w-[80%] ">
        <AllTasks />
      </div>
    </main>
  );
}
