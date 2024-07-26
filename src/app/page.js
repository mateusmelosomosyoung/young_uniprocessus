'use client'
import React, {useRef} from "react"
import styles from "./page.module.css"
import Navbar from "./components/navbar"
import HeaderModule from "./components/header"
import Diferencial from "./components/diferencial"
import Cursos from "./components/cursos"
import Ingressar from "./components/ingressar"
import Diplomacao from "./components/diplomacao"
import Modalidade from "./components/modalidade"
import FooterModule from "./components/footer"
import Contato from "./components/contato"
import Script from 'next/script'

export default function Home() {

      

  const cursosRef = useRef(null)
  const diferencialRef = useRef(null)
  const ingressarRef = useRef(null)
  const modalidadesRef = useRef(null)
  const contatoRef = useRef(null)

  const scrollToRef = (ref, offset = 0) => {
    if (ref?.current) {
        const topPosition = ref.current.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth'
        })
    }
  }
  return (
    <main className={styles.main}>
      <Navbar
        scrollToRef={scrollToRef}
        cursosRef={cursosRef}
        diferencialRef={diferencialRef}
        ingressarRef={ingressarRef}
        modalidadesRef={modalidadesRef}
      />
      <HeaderModule />
      <Script
        id="google-tag-manager-noscript"
        src="https://www.googletagmanager.com/ns.html?id=GTM-PH9GW3PX"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PH9GW3PX"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        ` }}
      />
      <Cursos 
        ref={cursosRef}
      />
      <Diferencial 
        ref={diferencialRef}/>
      <Ingressar 
        ref={ingressarRef}/>
      <Diplomacao />
      <Modalidade 
        ref={modalidadesRef}/>
      <Contato />
      <FooterModule />
    </main>
  )
}
