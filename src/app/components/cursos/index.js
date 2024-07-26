'use client'
import React, {useState, forwardRef} from "react"
import styles from './cursos.module.css'
import Image from "next/image"
import { cursos } from "../../data/cursosData"

const Cursos = forwardRef((props, ref) => { 

    const [option, setOption] = useState('')
    const [showAll, setShowAll] = useState(false)

    const toggleShowAll = () => {
        setShowAll(prevShowAll => !prevShowAll)
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
                                <button className="bttcard" onClick={() => {setOption(curso.curso)}}>INSCREVA-SE</button>
                            </div>
                        ))}
                    </div>
                    <button className="bttpblue" onClick={toggleShowAll}>
                        {showAll ? "Ocultar" : "Mostrar mais"}
                    </button>
                </div>
            </div>
        </>
    )
})

Cursos.displayName = 'Cursos'
export default Cursos
