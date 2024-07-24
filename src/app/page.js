import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Diferencial from "./components/diferencial"
import Cursos from "./components/cursos"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderModule />
      <Cursos />
      <Diferencial />
    </main>
  )
}
