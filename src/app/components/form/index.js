'use client'
import { useState, useEffect } from 'react'
import styles from './formmodule.module.css'
import { cursos } from "../../data/cursosData"
import axios from 'axios'

const FormModule = ( {withTitle, text, withCourse, curso} ) => {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [checkMkt, setCheckMkt] = useState(true)
  const [option, setOption] = useState('')
  const [loading, setLoading] = useState('')

  useEffect(() => {
    if (curso) {
      setOption(curso)
    }
  }, [curso])

  const handleChange = (e) => {
    setOption(e.target.value)
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const apiKey = `${process.env.NEXT_PUBLIC_API_KEY}`

    const url = `${process.env.NEXT_PUBLIC_URL_API}`

    const data = {
      nome: nome,
      whatsapp: whatsapp,
      email: email
    }
    if(checkMkt){
      data.checkMkt = checkMkt
    }
    if (option) {
      data.curso = option
    }

    setLoading(true)

    try {
      const result = await axios.post(url, data,{
        headers: {
          'apikey': apiKey
        }
      })
      alert('Dados recebidos com sucesso!')
      setNome('')
      setWhatsapp('')
      setEmail('')
      setCheckMkt(true)
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  
  return (
    <>
      <form onSubmit={handleSubmit} className="formgnr">
        {withTitle && <h2>{text}</h2>}
        <input className='lblwbb' type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Nome:' required />
        <input className='lblwbb' type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder='Whatsapp:' required />
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
          <button type="submit" disabled={loading} className='bttp'>{loading ? "Processando..." : "INSCREVA-SE"}</button>
        </div>
      </form>
    </>
  )
}

export default FormModule
