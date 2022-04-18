import React, {useRef} from 'react';
import styles from '../styles/Navbar.module.scss'
import logo from '../images/logo-sm.png'

const pages = [
    {id: 1, path: '#', name: 'About'},
    {id: 2, path: '#', name: 'Features'},
    {id: 3, path: '#', name: 'Pricing'},
    {id: 4, path: '#', name: 'Testimonials'},
    {id: 5, path: '#', name: 'Help'},
]

const Navbar = () => {
    const pagesRef = useRef()
    const signInRef = useRef()
    const handleBurgerClick = (event) => {
        if (event.target.name === 'menu') {
            event.target.name = 'close'
            pagesRef.current.style.display = 'grid'
            signInRef.current.style.display = 'flex'
        } else {
            event.target.name = 'menu'
            pagesRef.current.style.display = 'none'
            signInRef.current.style.display = 'none'
        }
    }

    return (
        <header className={styles.header}>
            <section>
                <img src={logo} alt="logo"/>
                <h1>Lasles<span>VPN</span></h1>
            </section>

            <ul ref={pagesRef}>
                {pages.map(page => <li key={page.id}>{page.name}</li>)}
            </ul>

            <span>
                <ion-icon name="menu" onClick={handleBurgerClick}/>
            </span>

            <section ref={signInRef}>
                <p>Sign In</p>
                <button>Sign In</button>
            </section>

        </header>
    );
};

export default Navbar;