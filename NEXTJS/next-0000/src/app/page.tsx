import styles from './page.module.scss'
import Head from 'next/head'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={montserrat.className}>  Hola</h1>
      </main>
    </>
  )
}
