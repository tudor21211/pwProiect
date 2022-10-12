import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.2)), url("https://static.zara.net/photos///contents/mkt/spots/aw22-north-man-new/subhome-xmedia-40-2//w/1920/IMAGE-landscape-fill-935efa10-c418-457a-b996-cfb9dad0fd78-default_0.jpg?ts=1665067352079") left;
display: flex;
align-items: center;
justify-content: center;
background-size:cover;
`
const Wrapper = styled.div`
  padding:20px;
  width:30%;
  background-color:rgba(255, 255, 255,0.92);
  

`
const Form = styled.form`
display: flex;
  font-size: 22px;
  font-weight: 200 ;
  flex-direction: column ;
`
const Title = styled.h1`
`
const Input = styled.input`
  flex:1;
  min-width: 50% ;
  margin:10px 10px 0px 0px;
  padding: 10px;
`
const Button = styled.button`
width: 15% ;
padding: 12px;
font-size: 10px;
border:1px solid;
margin-top:5px;
margin-bottom: 3px ;
background-color: transparent ;
cursor: pointer ;
transition:0.1s ease;
&:hover{
       background-color: black ;
       transform:scale(1.05);
       color:white;
    }
`

const Link = styled.a`
  font-size:13px;
  display: flex;
  align-items: center;
  cursor:pointer;

`


const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          SIGN IN
        </Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Button>LOG IN</Button>
            <Link>FORGOT YOUR PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}
export default Login