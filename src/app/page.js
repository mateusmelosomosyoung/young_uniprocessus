import Image from "next/image"
import styles from "./page.module.css"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
      </div>
    </main>
  )
}
