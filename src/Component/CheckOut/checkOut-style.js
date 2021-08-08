import styled  from "styled-components";


export const Padding = styled.div`
padding: 125px 110px 20px 100px;
@media screen  and (max-width: 800px){
    padding: 80px 10px;
} 
`
export const CheckOutContainer = styled.div`
min-height: 60ch;
border: .6px solid gray;
border-radius: 5px;
padding: 50px 0;
position: relative;
`  
export const CheckoutHeader = styled.div`
display: flex;

    & h4 {
        padding: 15px;
        width: 20%;
        text-align:center;
        text-transform: uppercase;
        font-weight: initial;
        letter-spacing: 1px;
        @media screen  and (max-width: 800px){
            padding: 8px;
            font-size: 10px;
            letter-spacing: 0;
            text-transform: capitalize;
        } 
    }
`
export const Empty = styled.h2`
color: rgb(200, 80, 100);
width: 100%;
text-align: center;
padding-top: 160px;
font-size: 40px;
letter-spacing: 2px;
`
export const CheckOutContent = styled.div`
display: flex;

    & h4{
        width: 20%;
        padding: 20px;
        text-align: center;
        margin:auto;
        @media screen  and (max-width: 800px){
            padding: 5px;
            font-size: 8px;
            letter-spacing: 0;
            text-transform: capitalize;
        }
    }
    & .pointer {
        cursor: pointer;
    }
    @media screen  and (max-width: 800px){
        align-items: center;
    }
`
export const Image = styled.div`
width: 20%;
padding: 20px;
text-align: center;
    & img{
        width: 50%;
        @media screen  and (max-width: 800px){
          
            width: 80%;
        }
    }
    @media screen  and (max-width: 800px){
        padding: 5px;
        width: 23%;
    }
`
export const Quantity = styled.h4`
width: 20%;
padding: 20px;
text-align: center;
margin:auto;
    & span {
        padding: 16px;
        font-size: 20px;
        @media screen  and (max-width: 800px){
            padding: 5px;
            font-size: 8px;
        }
    }
`
export const Total = styled.div`
bottom: 0;
padding: 20px;
position: absolute;
width:100%;
display: flex;
justify-content: space-between;
  & span {
      font-size:18px;
      margin-left:10px;
      color :#2C6;
  }
  & .empty{
      color:rgb(200,80,100);
  }
  
`