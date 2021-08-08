import styled from "styled-components";


export const Container = styled.div`
padding: 125px 110px 20px 110px;
@media screen  and (max-width: 800px){
    padding: 80px 10px 50px 10px;
}
` 
export const Detalis = styled.div`
margin: auto;
min-height: 60ch;
border: .6px solid gray;
border-radius: 5px; 
overflow: hidden;
position: relative;
margin-bottom: 20px;
@media screen  and (max-width: 800px){
    display: flex;
    flex-direction: column;
} 
`
export const DetalisImg = styled.div`
width: 50%;
height: 60ch;
padding: 20px;
float: left;
overflow: hidden;
text-align: center;
& img {
    height: 100%;
    max-width: 100%;
    @media screen  and (max-width: 800px){
        height: 60%;
       
    } 
  }
  @media screen  and (max-width: 800px){
    width: 100%;
    height: 65ch;
}  
`
export const Break = styled.div`
text-transform: uppercase;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
font-size: 15px;
font-weight: bold;
@media screen  and (max-width: 800px){
    top: 40%;
    display: flex;
    align-items: center;
} 
    &:before {
        content : '';
        width: 0.5px;
        height: 260px;
        background-color: grey;
        display: block;
        margin-left: 15px;
        @media screen  and (max-width: 800px){
            width: 160px ;
            height: 0.5px;
            margin-right: 15px;
            margin-left: 0;
        } 
    }
    &:after {
        content : '';
        width: 0.5px;
        height: 260px;
        background-color: grey;
        display: block;
        margin-left: 15px;
        @media screen  and (max-width: 800px){
            width: 160px ;
            height: 0.5px;
        } 
    }
`
export const DetalisDesc = styled.div`
width: 50%;
height: 100%;
float: left;
padding: 30px;
@media screen  and (max-width: 800px){
    width: 100%;
    text-align: center;
} 
`
export const TitleProduct = styled.div`
font-weight: unset;
margin-bottom: 30px;
`
export const MainLapel = styled.div`
overflow: hidden;
padding-left: 20px;
`
export const Label  = styled.div`
width: 120px;
height: 40px;
margin-bottom: 30px;
background-color: rgb(67, 204, 151);
border-radius: 0 5px 5px 0;
text-align: center;
position: relative;
    &:before{
        content: '';
        border-top: 20px solid transparent;
        border-right: 20px solid rgb(67, 204, 151);
        border-left: 20px solid transparent;
        border-bottom: 20px solid transparent; 
        position: absolute;
        left: -40px;
    }
    &:after{
        content: '';
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        display: block;
        position: absolute;
        top: 15px;
        left: -5px
    }
    &:hover{
        background-color: rgb(17, 165, 108);
        cursor: pointer;
    }
    &:hover::before{
        border-right: 20px solid rgb(17, 165, 108);
    }
    & h2 {
        color :white;
        line-height: 40px;
    }
    @media screen  and (max-width: 800px){
        width: 100%;
    } 
`
export const Category = styled.div`
width: 100%;
height: auto;
background-color: #f3f4f5;
border: 0.5px solid #d4d4d5;
border-radius: 5px;
margin-bottom: 30px;
    &  h3{
        color:#a5673f;
        padding: 10px;
    }
`
export const Decrip = styled.p`
font-size: 18px;
color: #777;
margin-bottom: 30px;
`
export const CartIcon = styled.div`
width: 100%;
height: 100%;
text-align: center;
position: relative;
top: -40px;
font-size: 26px;
line-height: 40px;
transition: all .2s linear;
`
export const AddCart = styled.div`
width: 100%;
height: 100%;
text-align: center;
line-height: 40px;
position: absolute;
top: 0;
transition: all .2s linear;
`
export const Cart = styled.div`
width: 180px;
height: 40px;
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
        width: 100%;
    } 
   
    
`