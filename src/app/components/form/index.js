'use client'
import { useState, useEffect } from 'react'
import styles from './formmodule.module.css'
import { cursos } from "../../data/cursosData"

const FormModule = ( {withTitle, text, withCourse} ) => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [checkMkt, setCheckMkt] = useState(true)
  const [option, setOption] = useState('')

  useEffect(() => {
    console.log(option)
  }, [option])

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      nome,
      telefone,
      email,
      checkMkt,
      option
    })
    // Resetar os campos após enviar o formulário, se necessário
    setNome('')
    setTelefone('')
    setEmail('')
    setCheckMkt(true)
  }
  
  const handleChange = (e) => {
    setOption(e.target.value)
  }

  useEffect(() => {
    console.log('checkMkt', checkMkt)
  }, [checkMkt])
  
  return (
    <>
      <form onSubmit={handleSubmit} className="formgnr">
        {withTitle && <h2>{text}</h2>}
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Whatsapp:' required />
        <input className='lblwbb' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
        {withCourse &&
          <select className='lblwbb' value={option} onChange={handleChange}>
            <option value="">Selecione um curso</option>
            {cursos.map((curso, index) => (
              <option key={index} value={curso.curso}>
                {curso.curso}
              </option>
            ))}
          </select>
        }
        <label>
          <input
            type="checkbox"
            checked={checkMkt}
            onChange={(e) => setCheckMkt(e.target.checked)}
          />
          {checkMkt ? "Aceito receber informações e promoções da Uniprocessus" : "Não quero receber informações e promoções da Uniprocessus"}
        </label>
        <div className={styles.divfbt}>
          <button type="submit" className='bttp'>INSCREVA-SE</button>
        </div>
      </form>
    </>
  )
}

export default FormModule
