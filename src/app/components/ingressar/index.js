import React from "react"
import styles from './ingressar.module.css'
import Image from "next/image"

const Ingressar = () => {

    const content = [
        {
            src : "/icons/desktop.png",
            alt : "Ícone computador",
            title : "Redação Online",
            text : "Teste sua escrita e ingresse na UniProcessus."
        },
        {
            src : "/icons/highlight.png",
            alt : "Ícone escrever",
            title : "ENEM",
            text : "Use sua nota do ENEM para garantir sua vaga."
        },
        {
            src : "/icons/refresh.png",
            alt : "Ícone rotação",
            title : "Transferência",
            text : "Mude para a UniProcessus e continue sua jornada."
        },
        {
            src : "/icons/duplicate.png",
            alt : "Ícone duplicata",
            title : "Segunda Graduação",
            text : "Amplie seus conhecimentos com um novo curso."
        }
    ]

    return (<>
        <div className="mmdvc">
            <div className={styles.cttigrs}>
                <h1 className="clrb">Como Ingressar na UniProcessus</h1>
                <div className={styles.itctts}>
                    {content.map((content, index) => (
                        <div key={index} className={styles.cmngr}>
                            <div className="frmcol">
                                <Image src={content.src} alt={content.alt} className={styles.iconigr} height={30}  width={30}/> 
                                <p className="clrb ftsz24 ftwt">{content.title.toUpperCase()}</p>
                            </div>
                            <br/>
                            <p className={'clrb ftsz20'}>{content.text}</p>
                            <br/>
                        </div>
                    ))}
                </div>
                <button className="bttpblue">INSCREVA-SE AGORA</button>
            </div>
        </div>
    </>)
}

Ingressar.displayName = 'Ingressar'
export default Ingressar