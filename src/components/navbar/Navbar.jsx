import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.jpg'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.AppBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt='CBD.js' height='25px' className={classes.image} />
                        CBD shop
                    </Typography>

                    <nav style={{ position: "absolute", left: "180px" }}>
                        <ul style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
                            <Link to="/products">Produkty</Link>
                            <Link to="/about">O nas</Link>
                            <Link to="/contact">Kontakt</Link>
                        </ul>
                    </nav>

                    <div className={classes.grow} />
                    {location.pathname === '/products' && (
                        <div className={classes.button}>
                            <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
