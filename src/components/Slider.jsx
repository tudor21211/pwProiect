import {ArrowLeftSharp,ArrowRightSharp } from '@material-ui/icons'

import React from 'react'

import styled from 'styled-components'



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-color: white ;
    position: relative;
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left : ${props=>props.direction==="left" && "10px"};//setam pozitia sagetilor
    right : ${props=>props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity: 0.6 ;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center ;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex:1;
`;

const Image = styled.img`
    height: 90% ;

`;



const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px ;
    font-size: 20px;
    font-weight: 500;
    letter-spacing:3px ;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent ;
cursor: pointer ;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
        <ArrowLeftSharp/>
        </Arrow> 
        <Wrapper>
        <Slide>
    <ImageContainer>
        <Image src= "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1879/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647" />
    </ImageContainer>
        <InfoContainer>
    <Title>INSANE SALES</Title>
        <Desc>GET 20% OFF FOR NEW ARRIVALS</Desc>
    <Button>SHOP NOW</Button>
    </InfoContainer>
        </Slide>
        <Slide>
    <ImageContainer>
        <Image src= "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1879/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647"/>
    </ImageContainer>
        <InfoContainer>
    <Title>INSANE SALES</Title>
        <Desc>GET 20% OFF FOR NEW ARRIVALS</Desc>
    <Button>SHOP NOW</Button>
    </InfoContainer>
        </Slide>
        <Slide>
    <ImageContainer>
        <Image src= "https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-basics/subhome-xmedia-38//w/1879/IMAGE-landscape-fill-f5302ebb-2ddc-4218-81c2-eb0464c2d73f-default_0.jpg?ts=1663576361647"/>
    </ImageContainer>
        <InfoContainer>
    <Title>INSANE SALES</Title>
        <Desc>GET 20% OFF FOR NEW ARRIVALS</Desc>
    <Button>SHOP NOW</Button>
    </InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction="right">
        <ArrowRightSharp/>
    </Arrow>
    </Container>
  )
}

export default Slider