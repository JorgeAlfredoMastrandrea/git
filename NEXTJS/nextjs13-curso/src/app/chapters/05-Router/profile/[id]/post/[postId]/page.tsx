"use client";

import { useParams } from "next/navigation";

export default function ProfileIDPostID() {

  const params = useParams()
  console.log(params)
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Mi id perfil..Post page ProfileIDPostID!!
        </div>
      </main>
    );
  }