import styled from 'styled-components';


export const Product = styled.div`
width: 100%;
height: 90px;
overflow: hidden;
display:flex;
border: 0.5px solid rgb(218 210 210);
border-radius:5px;
padding: 5px;
margin-bottom:5px;
`
export const Image = styled.div`
height: 100%;
width:50%;
    & img{
        max-width:100%;
        height: 100%;

    }
`
export const Info = styled.div`
display: flex;
flex-direction: column;
padding: 10px 0 0 5px;
width:50%;
    & h3 {
        font-size: 10px;
        margin-bottom:10px;
      
    }
`
export const Price = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
    & h5{
        font-size: 12px;
    }
    & span {
        font-size: 10px;
    }
`