"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile() {

  const router = useRouter();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>my list of profiles</h1>
        <div>
          <ul>
            <li onClick={()=> router.push("/profile/1")}>Profile 1</li>
            <li onClick={()=> router.push("/profile/2")}>Profile 2</li>
            <li onClick={()=> router.push("/profile/3")}>Profile 3</li>
          </ul>
        </div>
      </main>
    );
  }