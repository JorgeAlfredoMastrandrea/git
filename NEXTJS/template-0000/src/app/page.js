import Image from "next/image";
import styles from "./page.module.css";
import { DynamicLayout } from "@/componentes/dynamic/DynamicLayout";
import { ColorfulGrid } from "@/componentes/dynamic/ColorfulGrid";
import { DynamicGrid_copy } from "@/componentes/dynamic/DynamicGrid_copy";


export default function Home() {
  return (
    <DynamicGrid_copy />
  );
}
