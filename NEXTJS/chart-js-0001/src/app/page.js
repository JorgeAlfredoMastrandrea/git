"use client"

import { useState } from 'react';
import { ComponentsDemo } from "@/componentes/DemoChartJS/ComponentsDemo";
import { Gen } from '@/componentes/generico/Gen';

export default function Home() {

  const [archivo] = useState('datosJSON/ContentConfig.json')

  return (
    <ComponentsDemo archivo={archivo} />
  );
}