'use client'
import { useState } from 'react'
import styles from './navbar.module.css'
import Image from "next/image"

const Navbar = ({ scrollToRef, sobreRef, investimentoRef, profsRef, contatoRef }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  const itemList = [
    { text: "CURSOS" },
    { text: "DIFERENCIAIS" },
    { text: "COMO INGRESSAR" },
    { text: "MODALIDADES" }
  ]

  return (
    <>
      <nav className={styles.customnavbar}>
        <div className={styles.cstnvbitem}>
          <div className={styles.cstimgbtfmb}>
            <Image src={'/marca/logo.png'} alt='Uniprocessus Logo' className={styles.cstimg} height={64}  width={201}/>
            {isOpen ? <Image src={'/icons/x.png'} alt={'Ícone x para fechar'} className={styles.imgocmnclose} onClick={toggle} height={32}  width={32}/> : <Image src={'/icons/menu.png'} alt={'Ícone para abrir'} className={styles.imgocmnopen} onClick={toggle} height={18}  width={36}/>}
          </div>
          
          <div className={styles.mtrcstnv}>
            <ul className={styles.cstnvbir}>
              {itemList.map((item, index) => (
                <li key={index}>
                  <a className={styles.navlink}>{item.text}</a>
                </li>
              ))}
            </ul>
            <button onClick={() => scrollToRef(contatoRef)} className='bttp'>INSCREVA-SE</button>
          </div>

          {isOpen && <>
            <div className={styles.mtrcstmb}>
              <ul className={styles.cstnvhmb}>
                {itemList.map((item, index) => (
                  <li key={index}>
                    <a className={styles.navlink}>{item.text}</a>
                  </li>
                ))}
              </ul>
              <div className={styles.divfbpc}>
                <button onClick={() => scrollToRef(contatoRef)} className='bttp'>INSCREVA-SE</button>
              </div>
            </div>
            
          </>}
        </div>
      </nav>

    </>
  )
}

Navbar.displayName = 'Navbar'
export default Navbar
