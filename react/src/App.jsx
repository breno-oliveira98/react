import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTelegram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube} from 'react-icons/fa'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  return (
    <body>
      <Header />
      <section className="container">
      <Card logo={<FaFacebook />} title='Facebook' subtitle='Facebook' description='Facebook é uma plataforma de rede social online' />
      <Card logo={<FaYoutube />} title='Youtube' subtitle='Youtube' description='Youtube é uma plataforma de rede social online' />
      <Card logo={<FaTelegram />} title='Telegram' subtitle='Telegram' description='Telegram é uma plataforma de rede social online' />
      <Card logo={<FaTwitter />} title='Twitter' subtitle='Twitter' description='Twitter é uma plataforma de rede social online' />
      <Card logo={<FaLinkedin />} title='Linkedin' subtitle='Linkedin' description='Linkedin é uma plataforma de rede social online' />
      <Card logo={<FaWhatsapp />} title='Whatsapp' subtitle='Whatsapp' description='Whatsapp é uma plataforma de rede social online' />
      <Card logo={<FaInstagram />} title='Instagram' subtitle='Instagram' description='Instagram é uma plataforma de rede social online' />
      <Card logo={<FaTiktok />} title='Tiktok' subtitle='Tiktok' description='Tiktok é uma plataforma de rede social online' />
      <Card logo={<FaPinterest />} title='Pinterest' subtitle='Pinterest' description='Pinterest é uma plataforma de rede social online' />
      </section>
    </body>

  )
}

export default App
