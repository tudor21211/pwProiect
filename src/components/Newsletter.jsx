import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Send, Twitter, YouTube } from '@material-ui/icons';

const Container = styled.div`
height: 50vh;
background-color: #95CEC5;
margin-top:20px;
display: flex;
align-items: center ;
justify-content: center;
flex-direction: column ;

`
const Title = styled.h1`
font-size: 60px ;
margin-bottom: 150px;
height:20px;
`
const Desc = styled.div`
font-size: 30px ;
font-weight: 350 ;
margin-bottom: 20px;
`
const InputContainer = styled.div`
cursor: pointer;
width:30%;
height:40px ;
background-color: white ;
display: flex;
justify-content: space-between;
margin-bottom: 30px ;
`
const Input = styled.input`
padding-left:12px ;
border:none;
flex:8;

`
const Button = styled.div`

flex:1;
display: flex;
justify-content: center;
align-items:center;
transition: 0.2s ease;
margin:none;
&:hover{
        background-color: black;
        color:white;
}

`

const Social = styled.div`
display: flex;
margin-bottom:20px;
cursor: pointer;
`
const ButtonSocial = styled.button`
    flex:1;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: 0.1s ease;
    margin:none;
    &:hover{
            background-color: black;
            color:white;
    }
    cursor:pointer;
    border:none;
    background-color:   #95CEC5 ;
`
const Newsletter = () => {
  return (
<Container>
        <Title>
            Newsletter
        </Title>
        <Social>
            <ButtonSocial><YouTube/></ButtonSocial>
            <ButtonSocial><Twitter/></ButtonSocial>
            <ButtonSocial><Instagram/></ButtonSocial>
            <ButtonSocial><Facebook/></ButtonSocial>
        </Social>
        <Desc>
            Subscribe to our newsletter and get a 10% discount at your next purchase.
        </Desc>
    <InputContainer>
        <Input placeholder='Your email address' />
        <Button>
            <Send/>
        </Button>
    </InputContainer>
</Container>
  )
}

export default Newsletter