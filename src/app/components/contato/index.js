import React, {forwardRef} from "react"
import styles from './contato.module.css'
import FormModule from "../form"

const Contato = forwardRef((props, ref) => {

    return(<>
        <div className="mmdvc" ref={ref}>
            <div className={styles.frmctt}>
                <FormModule withTitle='true' text='Conquiste o futuro que você merece com a UniProcessus!' withCourse='true'/>
            </div>
        </div>
    </>)
})

export default Contato