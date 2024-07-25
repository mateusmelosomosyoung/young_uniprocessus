import React from "react"
import styles from './modalidade.module.css'
import Image from "next/image"

const Modalidade = () => {

    const content1 = [
        {
            title : "Flexibilidade Total",
            text : "Estude no seu ritmo, onde quiser."
        },
        {
            title : "Acesso 24/7",
            text : "Materiais e aulas disponíveis a qualquer hora."
        },
        
        {
            title : "Suporte Online",
            text : "Professores e tutores sempre prontos para ajudar."
        }
    ] 

    const content2 = [
        {
            title : "Interação Direta",
            text : "Aprenda e troque experiências presencialmente."
        },
        {
            title : "Infraestrutura Completa",
            text : "Salas equipadas com a melhor tecnologia para ensino."
        },
        {
            title : "Networking",
            text : "Construa relações profissionais e pessoais."
        }
    ] 


    return (<>
        <div className="mmdvc">
            <div className={styles.cttmdl}>
                <div className={styles.mdlcard}>
                    <h1>Ensino a Distância</h1>
                    <br/>
                    <div className={styles.shwctt}>
                        {content1.map((content, index) => (
                            <div key={index} className={styles.mdldditem}>
                                <div className="dvrow">
                                    <Image src={'/icons/setazul.png'} alt={'Ícone seta para direita'} className={styles.imgocmnclose} height={16}  width={16}/> 
                                    <p className="ftwt ftsz20">{content.title}</p>
                                </div>
                                <p className={styles.mdltxt}>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.mdlcard2}>
                    <h1>Ensino Presencial</h1>
                    <br/>
                    <div className={styles.shwctt}>
                        {content2.map((content, index) => (
                            <div key={index} className={styles.mdldditem}>
                                <div className="dvrow">
                                    <Image src={'/icons/setazul.png'} alt={'Ícone seta para direita'} className={styles.imgocmnclose} height={16}  width={16}/> 
                                    <p className="ftwt ftsz20">{content.title}</p>
                                </div>
                                <p className={styles.mdltxt}>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

Modalidade.displayName = 'Modalidade'
export default Modalidade