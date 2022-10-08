import {ArrowLeftSharp,ArrowRightSharp } from '@material-ui/icons'
import {sliderItems} from "../data"
import React, {useState} from "react";

import styled from 'styled-components'



const Container = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    background-color: white ;
    position: relative;
    overflow: hidden;
    
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
    z-index:2;
    transition:0.1s ease;
&:hover{
       background-color: grey ;
       transform:scale(1.2);
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.slideIndex* -100}vw) ;
    transition: all 0.8s ease-out;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center ;
    background-color:#F9F9F9 ;
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
transition:0.1s ease;
&:hover{
       background-color: black ;
       transform:scale(1.1);
       color:white;
    }
`



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{

        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        }

    };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftSharp/>
        </Arrow> 
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
        <Slide bg = {item.bg} key={item.id}>
    <ImageContainer>
        <Image src= {item.img} />
    </ImageContainer>
        <InfoContainer>
    <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
    <Button>SHOP NOW</Button>
    </InfoContainer>
        </Slide>
      ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightSharp/>
    </Arrow>
    </Container>
  )
}

export default Slider