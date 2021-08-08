import styled from "styled-components";



export const Background = styled.div` 
position: absolute;
top: 0;
height: 100%;
width: 40px;
background-color: #fff;
    &.right{
        right: 20px;
    }
`
export const CartIcon = styled.div`
width: 100%;
text-align: center;
position: relative;
top: -40px;
font-size: 20px;
line-height: 40px;
transition: all .2s linear;
`
export const AddCart = styled.div`
width: 100%;
text-align: center;
line-height: 40px;
position: absolute;
top: 0;
transition: all .2s linear;
font-size: 12px;
@media screen  and (max-width: 800px){
    font-size: 8px;
   } 
`
export const Cart = styled.div`
width: 120px;
background-color: rgb(60 173 105);
color: #fff;
border-radius: 5px;
position: relative;
overflow: hidden;
    &:hover{
        cursor: pointer;

        ${CartIcon} {
            top:0
        }
        ${AddCart} {
            top: 40px;
        }
    }
    @media screen  and (max-width: 800px){
        width: 60px;
       } 
   
    
`