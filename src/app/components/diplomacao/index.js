import React, {forwardRef} from "react"
import styles from './diplomacao.module.css'

const Diplomacao = forwardRef(({ scrollToRef, contatoRef }) => {

    return (<>
        <div className="mmdvc">
            <div className={styles.cttimg}>
                <div className={styles.bgdpl}>
                    <div className={styles.dplcard}>
                        <h1>Dupla Diplomação</h1>
                        <p>Economize tempo e dinheiro combinando duas graduações. Receba um diploma na metade do curso, e garanta que sua formação seja muito mais completa, para se destacar no mercado.</p>
                        <button className="bttp" onClick={() => scrollToRef(contatoRef, 100)}>INSCREVA-SE</button>
                    </div>
                </div>
                <div className={styles.formbl}></div>
            </div>
        </div>
    </>)
})

Diplomacao.displayName = 'Diplomacao'
export default Diplomacao