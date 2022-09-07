import React from 'react'
import logo from '../../assets/logo.png'
import CartWidget from '../Cart/CartWidget';
import { Nav } from './Nav/Nav';


const Navbar = () => {

    const categorias = [
        { id: 0, nombre: 'Quienes somos' },
        { id: 1, nombre: 'Contacto ' },
        { id: 2, nombre: 'Redes' },
        { id: 3, nombre: 'Servicios' },
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1>3dstore{nombre}</h1>
            <Nav categorias={categorias}/>
            <CartWidget />
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
}

export default Navbar
