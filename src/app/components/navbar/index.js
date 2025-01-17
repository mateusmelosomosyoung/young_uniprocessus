'use client'
import { useState } from 'react'
import styles from './navbar.module.css'
import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'
import FormModule from "../form"

const Navbar = ({ scrollToRef, cursosRef, diferencialRef, ingressarRef, modalidadesRef }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  
  const handleShow = () => {
    setShowModal(true)
  }

  const handleClose = () => {
      setShowModal(false)
  }

  const itemList = [
    { text: "CURSOS", ref: cursosRef },
    { text: "DIFERENCIAIS", ref: diferencialRef },
    { text: "COMO INGRESSAR", ref: ingressarRef },
    { text: "MODALIDADES", ref: modalidadesRef }
  ]

  return (
    <>
      <nav className={styles.customnavbar}>
        <div className={styles.cstnvbitem}>
          <div className={styles.cstimgbtfmb}>
            <Image src={'/marca/logoP.svg'} alt='Uniprocessus Logo' className={styles.cstimg} height={64}  width={201}/>
            {isOpen ? <Image src={'/icons/x.png'} alt={'Ícone x para fechar'} className={styles.imgocmnclose} onClick={toggle} height={32}  width={32}/> : <Image src={'/icons/menu.png'} alt={'Ícone para abrir'} className={styles.imgocmnopen} onClick={toggle} height={18}  width={36}/>}
          </div>
          
          <div className={styles.mtrcstnv}>
            <ul className={styles.cstnvbir}>
              {itemList.map((item, index) => (
                <li key={index}>
                  <div className={styles.navlink} onClick={() => scrollToRef(item.ref, 100)}>{item.text}</div>
                </li>
              ))}
            </ul>
            <button className='bttp' onClick={()=> {setShowModal(true)}}>INSCREVA-SE</button>
          </div>

          {isOpen && <>
            <div className={styles.mtrcstmb}>
              <ul className={styles.cstnvhmb}>
                {itemList.map((item, index) => (
                  <li key={index}>
                    <div className={styles.navlink} onClick={() => { scrollToRef(item.ref, 100); toggle(); }}>{item.text}</div>
                  </li>
                ))}
              </ul>
              <div className={styles.divfbpc}>
                <button  className='bttp' onClick={()=> {setShowModal(true)}}>INSCREVA-SE</button>
              </div>
            </div>
            
          </>}
        </div>
      </nav>
      
      <Modal show={showModal} onHide={handleClose}>
          <Modal.Body>
              <div className="mdlbtcls">
                  <Image src={'/icons/x.png'} alt={'Ícone x para fechar'} className="crspointer" onClick={handleClose} height={32}  width={32}/>
              </div>
              <FormModule withCourse={true} />
          </Modal.Body>
      </Modal>
    </>
  )
}

Navbar.displayName = 'Navbar'
export default Navbar
