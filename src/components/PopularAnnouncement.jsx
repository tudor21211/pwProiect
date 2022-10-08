import styled from 'styled-components'
import React from 'react'
const Container = styled.div`
   height: 30px;
    background-color: black;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight:500 ;
    width:40% ;
    border-radius: 20px ;
    margin-left:30%;
    margin-top:20px;
    margin-bottom:20px;
`
const PopularAnnouncement = () => {
  return (
    <Container>
    POPULAR ITEMS
    </Container>
  )
}

export default PopularAnnouncement