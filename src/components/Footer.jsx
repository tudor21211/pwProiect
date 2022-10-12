import { Description, LocationOn, Mail, Phone } from '@material-ui/icons'
import React from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column ;
    padding:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`
const Right = styled.div`
    flex:1;
    padding:20px;
`
const Desc = styled.p`
    margin: 20px 10px;
    display: flex;
    width:50%;
    
`

const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50% ;
    margin-bottom:5px;
`

const Logo = styled.h1`
    font-weight: 600 ;
    font-size:60px;
`

const ContactItems = styled.div`
    margin-bottom: 7px;
    display:flex;
    align-items: center;
`

const TitleContact = styled.h3`
    margin-bottom:30px ;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>TAP.</Logo>
            <Desc>Thank you for accesing the site. Hope you had a great time.</Desc>
        </Left>
        <Center>
            <Title>Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Wishlist</ListItem> 
                <ListItem>Men Fashion</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Help</ListItem>
            </List>
        </Center>
        <Right>
            <TitleContact>Contact</TitleContact>
            <ContactItems><LocationOn style ={{marginRight:"10px"}}/>
                Street Acad. Remus Radulet, Timisoara 16.
            </ContactItems>
            <ContactItems><Phone style ={{marginRight:"10px"}}/>
                +40746431639
            </ContactItems>
            <ContactItems><Mail style ={{marginRight:"10px"}}/>
                tudor.androne@student.upt.ro
            </ContactItems>
        </Right>
    </Container>
  )
}

export default Footer