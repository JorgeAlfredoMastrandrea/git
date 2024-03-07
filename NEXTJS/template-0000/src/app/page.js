import Image from "next/image";
import styles from "./page.module.css";
import { DynamicLayout } from "@/componentes/dynamic/DynamicLayout";
import { ColorfulGrid } from "@/componentes/dynamic/ColorfulGrid";
import { DynamicGrid } from "@/componentes/dynamic/DynamicGrid";


export default function Home() {
  return (
    <DynamicGrid />
  );
}
