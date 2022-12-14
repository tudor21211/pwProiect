import { Badge } from '@material-ui/core';
import { Search, ShoppingCartSharp } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;
const Left=styled.div`
    flex : 1;
    display: flex ;
    align-items: center ;
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
`;
const Language = styled.span`
font-size: 14px ;
cursor:pointer;
`
const SearchContainer = styled.div`
border : 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`

const Logo = styled.h1`
    font-weight: bolt;
`
const Input = styled.input`
    border:none;
`
const MenuItem = styled.div`
font-size:15 ;
cursor:pointer;
margin-left: 25px;
`
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity);
  return (
    <Container> 
        <Wrapper> 
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input />
                    <Search style={{color:"gray", fontSize:20}}/>
                </SearchContainer>
            </Left>
            <Center><Link to="/" style={{textDecoration:'none',color:'black'}}><Logo>TAP.</Logo></Link></Center>
            <Right>
            <Link to="/" style={{textDecoration:'none',color:'black'}} ><MenuItem>logout</MenuItem></Link>
            <Link to="/register"  style={{textDecoration:'none',color:'black'}}> <MenuItem>REGISTER</MenuItem></Link>
            <Link to="/login"  style={{textDecoration:'none',color:'black'}}> <MenuItem>LOGIN</MenuItem></Link>

                <Link to="/cart">
                <MenuItem><Badge badgeContent = {quantity} color="primary">
                
                <ShoppingCartSharp/>
                    </Badge></MenuItem>
                    </Link> 
                </Right>
        </Wrapper>
       </Container>
  )
}
export default Navbar