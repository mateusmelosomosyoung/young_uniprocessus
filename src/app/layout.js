import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Graduação UniProcessus - Cada etapa uma transformação",
  description: "Garanta sua vaga na UniProcessus e transforme sua carreira! Oferecemos cursos com opções presenciais e a distância. Acesse e descubra nossos diferenciais!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="keywords" content="UniProcessus, Educação Superior, Cursos de Graduação, Pós-Graduação, Ensino a Distância, Ensino Presencial, Inscrição Universitária, Dupla Diplomação, Educação de Qualidade, Centro Universitário, Vagas Universitárias" />
        <Script
          id="google-tag-manager-script"
          src="/googleTagManager.js"
          strategy="afterInteractive"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
