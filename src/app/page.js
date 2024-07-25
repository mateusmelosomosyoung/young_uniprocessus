import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Diferencial from "./components/diferencial"
import Cursos from "./components/cursos"
import Ingressar from "./components/ingressar"
import Diplomacao from "./components/diplomacao"
import Modalidade from "./components/modalidade"
import FooterModule from "./components/footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeaderModule />
      <Cursos />
      <Diferencial />
      <Ingressar />
      <Diplomacao />
      <Modalidade />
      <FooterModule />
    </main>
  )
}
