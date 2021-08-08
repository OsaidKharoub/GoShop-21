import styled from "styled-components";



export const HeaderSt = styled.header`
width:100%;
padding: 20px 0 ;
box-shadow: 0px 0px 1px ;
position:fixed;
background-color:#fff;
z-index: 99;
 & .show{
    right:0;
}
@media screen  and (max-width: 800px){
  
    padding: 5px;
  
}
`
export const Container =styled.div`
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
`

export const Cart = styled.div`
font-size: 25px;
float:left;
cursor: pointer;
line-height: 54px;
`
export const Img = styled.img`
    width: 120px;
`