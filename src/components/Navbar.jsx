import { Badge } from '@material-ui/core';
import { Search, ShoppingCartSharp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"

const Container = styled.div`
position:fixed; 
width:100%;
z-index:2;
    height: 60px;
    background:rgba(249,249,249,1) ;

  ${mobile({height:"50px"})}
  padding-top:20px;

`;;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
 
   
`;
const Left=styled.div`
    flex : 1;
    display: flex ;
    align-items: center ;
    ${mobile({marginLeft:"-20px"})}
`;
const Center=styled.div`
    flex :1;
    text-align: center ;
`;
const Right=styled.div`
    flex: 1;
    display: flex ;
    align-items: center;
    justify-content: flex-end ;
    ${mobile({justifyContent:"center",flex:"2"})}
`;

const Language = styled.span`
font-size: 14px ;
cursor:pointer;
${mobile({display:"none"})}
`

const SearchContainer = styled.div`
border : 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
background-color: "#F9F9F9";

`

const Logo = styled.h1`
    font-weight: bolt;
    ${mobile({fontSize:"29px"})}
`

const Input = styled.input`
    border:none; 
    ${mobile({width:"75px"})}
`;

const MenuItem = styled.div`
font-size:15 ;
cursor:pointer;
margin-left: 25px;
${mobile({fontSize:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container> 
        <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input placeholder="Search"/>
                    <Search />
                </SearchContainer>
            </Left>
            <Center><Logo>TAP.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem><Badge badgeContent = {4} color="primary">
                        <ShoppingCartSharp/>
                    </Badge></MenuItem>
                </Right>
        </Wrapper>
       </Container>
  )
}

export default Navbar