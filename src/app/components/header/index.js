'use client'
import React, {useState} from "react"
import styles from './header.module.css'
import FormModule from "../form"
import Image from "next/image"

const HeaderModule = () => {

    const[showContent, setShowContent] = useState(true)

    return(<>
        <div className={styles.hdrd}>
            {showContent && 
                <div className={styles.internalctt}>
                    <div className="frg">
                        <div className={styles.divfbt1}>
                            <Image src={'/icons/x.png'} alt={'Ícone x para fechar'} className={styles.imgocmnclose} onClick={() => setShowContent(false)} height={32}  width={32}/> 
                        </div>
                        <FormModule withTitle='true' text='Garanta sua vaga'/>
                    </div>
                </div>
            }
        </div>
    </>)
}

HeaderModule.displayName = 'HeaderModule'
export default HeaderModule