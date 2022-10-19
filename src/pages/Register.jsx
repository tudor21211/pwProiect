import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.5)), url("https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-40//w/1920/IMAGE-landscape-fill-a778f632-a020-4372-86f1-7c13ba3cc9ad-default_0.jpg?ts=1665057200255") left;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width:40%;
  padding:20px;
  background-color:rgba(255, 255, 255,0.92);
`
const Form = styled.form`
display: flex;
  flex-wrap:wrap;
`
const Title = styled.h1`
`
const Input = styled.input`
  flex:1;
  min-width: 40% ;
  margin:10px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
display: flex;
font-size: 15px ;
margin:20px 0px;
`
const Button = styled.button`
display: flex;
width: 11% ;
padding: 15px;
font-size: 15px;
border:1px solid;
background-color: transparent ;
cursor: pointer ;
transition:0.1s ease;
&:hover{
       background-color: black ;
       transform:scale(1.05);
       color:white;
    }
`


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          CREATE AN ACCOUNT
        </Title>
        <Form>
            <Input placeholder="name"/>
            <Input placeholder="last name"/>
            <Input placeholder="email"/>
            <Input placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <Input type="password" placeholder="confirm password"/>
            <Agreement>
                By creating an account, I consent to the processing of my personal data in acordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register