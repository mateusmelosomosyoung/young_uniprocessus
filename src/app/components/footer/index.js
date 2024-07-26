import React from "react"
import styles from './footer.module.css'
import Image from "next/image"
import Link from "next/link"

const FooterModule = () => {

    const social = [
        {
            rede : "Facebook",
            src : "/icons/facebook.svg",
            alt : "Ícone facebook",
            href : "https://www.facebook.com/uniprocessus"
        },
        {
            rede : "Linkedin",
            src : "/icons/linkedin.svg",
            alt : "Ícone linkedin",
            href : "https://www.linkedin.com/school/centro-universit%C3%A1rio-processus-uniprocessus/?originalSubdomain=br"
        },
        {
            rede : "Instagram",
            src : "/icons/instagram.svg",
            alt : "Ícone instagram",
            href : "https://www.instagram.com/uniprocessus/"
        },
        {
            rede : "Youtube",
            src : "/icons/youtube.svg",
            alt : "Ícone youtube",
            href : "https://www.youtube.com/@uniprocessus"
        }
    ]


    return (<>
        <div className="mmdvc bgclrb">
            <div className={styles.footer}>
                <div className={styles.cttfooter}>
                    <Image src={'/marca/logoG.svg'} alt='Uniprocessus Logo' className={styles.ftrimg} height={129}  width={313}/>
                    <div className={styles.ftcttcol}>
                        <div className={styles.frmcolpg}>
                            <p className="ftsz16 ftwt700">FALE COM A GENTE</p>
                            <p className="ftsz16">(61) 3142-5787</p>
                        </div>
                        <div className={styles.frmcolpg}>
                            <p className="ftsz16 ftwt700">CONHEÇA NOSSAS REDES SOCIAIS</p>
                            <div className="dvrow">
                                {social.map((content, index) => (
                                    <Link key={index} target="__blank" href={content.href}>
                                        <Image src={content.src} alt={content.alt} width={24} height={24} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="frmcol">
                            <div className="dvrow">
                                <Image src={'/icons/map.svg'} alt={'Ícone local'} className={styles.ftlcimg} height={24}  width={24}/> 
                                <p className="ftsz16">Asa Sul/DF - Campus I SEPS 708/907 <br/> Módulo D Asa Sul - 70390-079</p>
                            </div>
                            <div className="dvrow">
                                <Image src={'/icons/map.svg'} alt={'Ícone local'} className={styles.ftlcimg} height={24}  width={24}/> 
                                <p className="ftsz16">Águas Claras/DF - Campus II Avenida das <br/> Araucárias 4400 Águas Claras - 71936-250</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={'/img/emec.png'} alt={'Logo E-mec'}width={207} height={299}/>
            </div>
        </div>
    </>)
}

FooterModule.displayName = 'FooterModule'
export default FooterModule