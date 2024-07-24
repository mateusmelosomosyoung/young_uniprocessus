'use client'
import { useState, useEffect } from 'react'
import styles from './formmodule.module.css'

const FormModule = ( {withTitle} ) => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [checkMkt, setCheckMkt] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log({
      nome,
      telefone,
      email,
      checkMkt
    })
    // Resetar os campos após enviar o formulário, se necessário
    setNome('')
    setTelefone('')
    setEmail('')
    setCheckMkt(true)
  }

  useEffect(() => {
    console.log('checkMkt', checkMkt)
  }, [checkMkt])
  return (
    <>
      <form onSubmit={handleSubmit} className="formgnr">
        {withTitle && <h2>Garanta sua vaga</h2>}
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Whatsapp:' required />
        <input className='lblwbb' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail:' required />
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
