"use client"

import { useState } from 'react';
import { ComponentsDemo } from "@/componentes/DemoChartJS/ComponentsDemo";
export default function Home() {

  const [archivo] = useState('datosJSON/Layout_12.json')

  return (
    <div className="container-fluid p-0">
      <ComponentsDemo archivo={archivo} />
    </div>    
  );
}

// container-fluid p-0