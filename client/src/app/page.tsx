
"use client";
import AllTasks from "@/components/task/AllTasks";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  console.log(token);
  const router = useRouter();
  if (token === null) {
    router.push("/login");
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    // Fetch tasks on mount
    async function getDetails() {
      const response = await fetch(
        "https://task-manager-backend-fmig.onrender.com/api/v1/auth/register",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      const user = data.user;

      const { name: n, email: e } = user;

      setEmail(e);
      setName(n);
    }
  }, []);

  return (
    <main className="w-screen h-screen flex bg-whitesmoke-100 ">
      <div className="w-[18%]">
        <Sidebar name={name} email={email} />
      </div>
      <div className="w-[80%] ">
        <AllTasks />
      </div>
    </main>
  );
}