import styled from 'styled-components'
import React from 'react'
const Container = styled.div`
position:fixed; 
width:100%;
z-index:3;  
padding-top:10px; 
    height: 15px;
    background-color:#95CEC5;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight:500 ;
`

const Announcement = () => {
  return (
    <Container>
    Fast Deal! Free Shipping just TODAY!
    </Container>
  )
}

export default Announcement