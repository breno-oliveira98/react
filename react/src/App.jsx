
import './App.css'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className="container">
      <Card title='Facebook' subtitle='Facebook' description='Facebook é uma plataforma online de rede social' />
      <Card title='Youtube' subtitle='Youtube' description='Youtube é uma plataforma online de rede social' />
      <Card title='Telegram' subtitle='Telegram' description='Telegram é uma plataforma online de rede social' />
      <Card title='Twitter' subtitle='Twitter' description='Twitter é uma plataforma online de rede social' />
      <Card title='Twitter' subtitle='Twitter' description='Twitter é uma plataforma online de rede social' />
      </div>
    </>
  )
}

export default App
