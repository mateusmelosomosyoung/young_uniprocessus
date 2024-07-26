import React, {forwardRef} from "react"
import styles from './diferencial.module.css'
import Image from "next/image"

const Diferencial = forwardRef((props, ref) => {

    const content1 = [
        {
            titulo : "Excelência Acadêmica",
            content : "Nossos professores são mestres e doutores com vasta experiência. Eles não só ensinam, mas inspiram e guiam você rumo ao sucesso. Na UniProcessus, você aprende com os melhores para ser o melhor."
        },
        {
            titulo : "Duas Diplomas em Menos Tempo",
            content : "Em apenas dois anos, conquiste dois diplomas e amplie suas oportunidades no mercado de trabalho. Imagine ter uma formação completa em menos tempo, pronto para conquistar seu espaço."
        }
    ]

    const content2 = [
        {
            titulo : "Alta Taxa de Aprovação em Concursos",
            content : "Nosso foco em carreiras públicas garante uma preparação sólida e eficaz. Nossos alunos se destacam em concursos, alcançando cargos desejados e carreiras promissoras. Seja você o próximo a comemorar essa conquista."
        },
        {
            titulo : "Apoio e Orientação Personalizados",
            content : "Cada aluno é único, e na UniProcessus, você recebe um plano de carreira sob medida. Desde o primeiro dia, nosso time de especialistas está ao seu lado, oferecendo suporte contínuo e orientação profissional."
        },
        {
            titulo : "Infraestrutura de Ponta",
            content : "Ambientes modernos e tecnológicos esperam por você. Nossas salas de aula e laboratórios são equipados com o que há de mais avançado para tornar sua experiência de aprendizado eficiente e prazerosa."
        },
        {
            titulo : "Flexibilidade no Ensino",
            content : "Oferecemos cursos presenciais e EAD, atendendo às suas necessidades e estilo de vida. Seja qual for a sua escolha, garantimos uma educação de qualida"
        }
    ]

    return (<>
        <div className="mmdvc bgclrb" ref={ref}>
            <div className={styles.cttdfr}>
                <div className="frmcol">
                    <h1 className="clry">Por Que Escolher a UniProcessus?</h1>
                    <br/>
                    <br/>
                    <br/>
                    {content1.map((content, index) => (
                        <div key={index} className={styles.curso}>
                            <div className="dvrow">
                                <Image src={'/icons/seta.png'} alt={'Ícone seta para direita'} className={styles.imgocmnclose} height={16}  width={16}/> 
                                <p className="lttspc clry ftwt">{content.titulo.toUpperCase()}</p>
                            </div>
                            <p className={styles.txtprc}>{content.content}</p>
                            <br/>
                            <br/>
                        </div>
                    ))}
                </div>
                <div className="frmcol">
                    {content2.map((content, index) => (
                        <div key={index} className={styles.curso}>
                            <div className="dvrow">
                                <Image src={'/icons/seta.png'} alt={'Ícone seta para direita'} className={styles.imgocmnclose} height={16}  width={16}/> 
                                <p className="lttspc clry ftwt">{content.titulo.toUpperCase()}</p>
                            </div>
                            <p className={styles.txtprc}>{content.content}</p>
                            <br/>
                            <br/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
})

Diferencial.displayName = 'Diferencial'
export default Diferencial