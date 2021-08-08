import React from 'react'
import {HeaderSt, H2, Img ,Cart} from './header-style';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Dropdown from '../DropDown/dropDown-component';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/scale.css';
import Logo  from './README.png';
import { Container } from './header-style'



const Header = ( {history} ) => {
       
    return(
        <HeaderSt>
        <Container>
            <h2> <Link to="/"><Img src={Logo} alt="" /></Link></h2>
            <Tippy  offset={[0,20]} placement={'bottom'} animation='scale' interactive={true} content = { <Dropdown className={"show"}/> }>
            <Cart onClick={() => history.push('/checkout')}>
            <i className="fa fa-shopping-cart"></i>
            </Cart>
           </Tippy>
        </Container>
        </HeaderSt>
    )
}



export default withRouter(Header);