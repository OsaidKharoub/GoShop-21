import styled from "styled-components";


export const Product = styled.div`
width: 23%;
border: 0.5px solid rgb(218 210 210);
margin-bottom: 30px;
border-radius: 6px;
transition: all .2s linear;
    &:hover{
        transform: scale(1.05);
    }
    @media screen  and (max-width: 800px){
        width: 100%;
    }
`

export const Image = styled.div`
height: 250px;
padding: 20px;
margin: auto;
text-align: center;
&  img {
    height: 100%;
    max-width: 100%;
    width: auto;
}
`
export const Description = styled.div`
padding: 20px;
border-top: 0.2px solid rgb(168, 159, 159); 
`
export const Title = styled.h4`
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
export const Price = styled.h4`
margin-bottom: 4px;
`
export const KindProduct = styled.p`
font-size: 12px;
color: grey;
`
export const BottomSection = styled.div`
display:flex;
justify-content: space-between;
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
font-size: 11px;
`
export const Cart = styled.div`
width: 90px;
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
   
    
`