import './Header.css'
export default function Header() {
    return (
        <>
        <header className="header">
            <div className="logo">Logo</div>
            <nav className="nav">
                <ul>
                    <li><a href="">Inincio</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Contatos</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}