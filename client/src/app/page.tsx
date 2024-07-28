"use client";
import AllTasks from "@/components/task/AllTasks";
import Sidebar from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/components/variable";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    async function getDetails() {
      const response = await fetch(`${BACKEND_URL}/api/v1/auth/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });

      const data= await response.json();
      const {name:n, email:e} = data.user;
      console.log(n,e)
      setEmail(e);
      setName(n);
    }
    getDetails();

  }, []);

  return (
    <main className="w-screen h-screen flex bg-whitesmoke-100 ">
      <div className="w-[18%]">
        <Sidebar
          email= {email}
        />
      </div>
      <div className="w-[80%] ">
        <AllTasks 
        name= {name} />
      </div>
    </main>
  );
}