import './Header.css';

export default function Header() {
    return (
        <div className='navbar'>
            <h1 className='navbar__logo'>Fake Store</h1>
            <ul className='navbar__menu'>
                <li className='navbar__menu__items'> 
                    <a href='#'>Início</a>
                    <a href='#'>Nossos produtos</a>
                    <a href='#'>Sobre</a>
                </li>
            </ul>
        </div>
    )
}