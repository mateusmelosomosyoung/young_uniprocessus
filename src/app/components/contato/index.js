import React from "react"
import styles from './contato.module.css'
import FormModule from "../form"

const Contato = () => {

    return(<>
        <div className="mmdvc">
            <div className={styles.frmctt}>
                <FormModule withTitle='true' text='Conquiste o futuro que você merece com a UniProcessus!' withCourse='true'/>
            </div>
        </div>
    </>)
}

export default Contato