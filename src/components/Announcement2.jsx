import styled from 'styled-components'
import React from 'react'
const Container = styled.div`
    height: 30px;
    background-color: #a3bdbc;
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