"use client"

import { useState } from 'react';
import { ComponentsDemo } from "@/componentes/DemoChartJS/ComponentsDemo";
export default function Home() {

  const [archivo] = useState('datosJSON/ContentConfig.json')

  return (
    <div className="container-xxl p-0">
      <ComponentsDemo archivo={archivo} />
    </div>    
  );
}