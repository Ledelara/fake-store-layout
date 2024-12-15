'use client';

import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 648) {
                setIsScrolled(window.scrollY > 50);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <h1 className={`navbar__logo ${isScrolled ? 'navbar__logo--hidden' : ''}`}>Fake Store</h1>
            <ul className='navbar__menu'>
                <li className='navbar__menu__items'> 
                    <a href='#'>Início</a>
                    <a href='#'>Eletrônicos</a>
                    <a href='#'>Jóias</a>
                    <a href='#'>Roupas</a>
                </li>
            </ul>
        </div>
    )
}