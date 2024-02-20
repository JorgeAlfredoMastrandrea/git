"use client";

import { useParams , useRouter } from "next/navigation";

export default function ProfileID() {

  const params = useParams();
  const router = useRouter();

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Mi id perfil..ProfileID!!: {params.id}
        </div>
        <div onClick={()=>router.push('/chapters/05-Router/profile')}>
          Volver a la página principal
        </div>
      </main>
    );
  }