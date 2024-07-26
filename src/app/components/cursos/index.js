'use client'
import React, { useState, forwardRef } from "react"
import styles from './cursos.module.css'
import Image from "next/image"
import { cursos } from "../../data/cursosData"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'react-bootstrap'
import FormModule from "../form"

const Cursos = forwardRef((props, ref) => { 

    const [option, setOption] = useState('')
    const [showAll, setShowAll] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const toggleShowAll = () => {
        setShowAll(!showAll)
    }

    const handleShow = (curso) => {
        setOption(curso)
        setShowModal(true)
    }

    const handleClose = () => {
        setOption('')
        setShowModal(false)
    }

    return (
        <>
            <div className="mmdvc" ref={ref}>
                <div className={styles.crsctt}>
                    <h1 className="clrb">Nossos cursos</h1>
                    <div className={styles.cttcards}>   
                        {cursos.slice(0, showAll ? cursos.length : 3).map((curso, index) => (
                            <div key={index} className={styles.cardcrs}>
                                <div className={styles.cddcttwb}>
                                    <h4 className="clrb">{curso.curso}</h4>
                                    <b>{curso.campus.toUpperCase()}</b>
                                    <br/>
                                    <div className={styles.divitimg}>
                                        <Image src={'/icons/local.png'} alt={'Ícone local'} className={styles.imgicon} height={20} width={20}/> 
                                        <p className="ftsz14">{curso.modalidade}</p>
                                    </div>
                                    <div className={styles.divitimg}>
                                        <Image src={'/icons/clock.png'} alt={'Ícone tempo, relógio'} className={styles.imgicon} height={20} width={20}/> 
                                        <p className="ftsz14">{curso.duracao}</p>
                                    </div>
                                    <div className={styles.divitimg}>
                                        <Image src={'/icons/certificate.png'} alt={'Ícone certificado'} className={styles.imgicon} height={20} width={20}/>
                                        <p className="ftsz14">{curso.certificado}</p>
                                    </div>
                                    <div className={styles.divitimg}>
                                        <Image src={'/icons/hourglass.png'} alt={'Ícone ampulheta'} className={styles.imgicon} height={20} width={20}/>
                                        <p className="ftsz14">{curso.turno}</p>
                                    </div>
                                    <br/>
                                </div>
                                <button className="bttcard" onClick={() => handleShow(curso.curso)}>INSCREVA-SE</button>
                            </div>
                        ))}
                    </div>
                    <button className="bttpblue" onClick={toggleShowAll}>
                        {showAll ? "Ocultar" : "Mostrar mais"}
                    </button>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>
                    <div className="mdlbtcls">
                        <Image src={'/icons/x.png'} alt={'Ícone x para fechar'} className="crspointer" onClick={handleClose} height={32}  width={32}/>
                    </div>
                    <FormModule withCourse={true} curso={option}/>
                </Modal.Body>
            </Modal>
        </>
    )
})

Cursos.displayName = 'Cursos'
export default Cursos
