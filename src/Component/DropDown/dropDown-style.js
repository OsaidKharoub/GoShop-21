import styled from "styled-components";

export const DropDown = styled.div`
padding: 20px;
width:300px;
min-height:413px;
background-color:white;
border: 1px solid gray;
border-radius: 5px;
display: flex;
flex-direction: column;
z-index: 5;
transition: all .3s linear;
@media  screen and (max-width:800px){
    width:200px;
    min-height:300px;
    padding: 5px;
}
`

export const CartItem = styled.div`
height: 300px;
overflow: scroll;
    & h4{
    text-align: center;
    color:rgb(200, 80, 100);
    padding: 40px 0 0 0;
}
@media  screen and (max-width:800px){
    height:200px;
}
`
export const Button = styled.button`
background-color: #fff;
color: rgb(60 173 105);
width: 120px;
padding: 8px 0;
cursor: pointer;
border: 4px solid rgb(60 173 105);
outline: none;
margin: auto;
border-radius:5px;
font-size: 12px;
transition: all .2s linear;
 &:hover{
    letter-spacing: 2px;
 }
 @media  screen and (max-width:800px){
    width: 100px;
    padding: 5px 0;
}
`