import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Container = styled.div`
    width:30rem;
    margin: 3rem auto;
    .line{
        border:1px black solid;
        margin: -25px auto;
        width: 18rem;
        z-index:-1
    }
    p{
        font-size:1.5rem;
        text-align: center
    } 
`;

export const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    .icon{
        font-size: 3rem;
        padding:8px;
        border: black solid 1px;
        border-radius: 50%;
        background-color:white
    }
`

export const ContainerForm = styled.div`
   margin-top:6rem



`