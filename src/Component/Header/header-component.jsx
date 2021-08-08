import React from 'react'
import {HeaderSt, H2, Img ,Cart} from './header-style';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Dropdown from '../DropDown/dropDown-component';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import Logo  from './README.png';
import { Container } from './header-style';
import { useMediaQuery } from 'react-responsive'



const Header = ( {history} ) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })   
    const isModile = useMediaQuery({ query: '(max-width: 800px)' })
    return(
        <HeaderSt>
        <Container>
            <h2> <Link to="/"><Img src={Logo} alt="" /></Link></h2>
            {isDesktopOrLaptop &&  <Tippy  offset={[0,20]} placement={'bottom'} animation='scale' interactive={true} content = { <Dropdown className={"show"}/> }>
            <Cart onClick={() => history.push('/checkout')}>
            <i className="fa fa-shopping-cart"></i>
            </Cart>
           </Tippy>}
           {isModile && <Tippy  offset={[0,5]} placement={'bottom'} animation='scale' interactive={true} content = { <Dropdown className={"show"}/> }>
            <Cart>
            <i className="fa fa-shopping-cart"></i>
            </Cart>
           </Tippy>}
        </Container>
        </HeaderSt>
    )
}



export default withRouter(Header);