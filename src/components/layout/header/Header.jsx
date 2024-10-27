import React from 'react'
import Logo from '../../../assets/logo.png'
import Icon from '../../../assets/search-icon.svg'
import './Header.css'

const Header = () => {
  return (
    <header className='main-header'>
        <img className='logo' src={Logo} alt="Logo do site" />

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/contato">Contato</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/cadastro">Cadastre-se</a></li>
            </ul>
        </nav>

        <div>
            <input type="search" aria-label="Pesquisar" placeholder="Buscar..." />
            <img className='search-icon' src={Icon} alt="Ícone de pesquisa" />
        </div>
    </header>

  )
}

export default Header