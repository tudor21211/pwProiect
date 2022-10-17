import {Add, Details, Remove, Title } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Navbar2 from '../components/Navbar2'
import Announcement2 from '../components/Announcement2'
const Container = styled.div`

`

const Wrapper = styled.div`
 padding:20px;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:12px;
margin-bottom:15px;

`

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600;
 cursor:pointer;
 padding: 10px;
font-size: 14px;
background-color: transparent ;
cursor: pointer ;
transition:0.1s ease;
&:hover{
       background-color: black ;
       transform:scale(1.1);
       color:white;
    }
`

const Titlu = styled.h1`
font-weight:400 ;
text-align: center ;
`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline ;
    cursor:pointer;
    margin:0px 10px;
    
`
const Bottom = styled.div`
display: flex;
    justify-content: center;
`
const Info = styled.div`
    flex:3;
`

const Hr = styled.hr`
background-color:   #eee ;
border:none;
height:2px;
`



const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
    flex:2;
    display: flex;
`
const Image = styled.img`
    width: 180px;
`
const Detail = styled.div`
padding: 20px;
display: flex;
flex-direction: column ;
grid-row-gap:15px;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
width: 20px;
height:20px ;
border-radius:50% ;
background-color:${props=>props.color};
`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom:5px;
`
const ProductAmount = styled.div`
font-size: 28px;
margin: 8px;
`
const ProductPrice = styled.div`
    font-size:32px ;
    font-weight:150 ;
`

const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:5px;
    height:50vh;
    
`

const SummaryTitle = styled.h1`
font-weight:400 ;
    
`
const SummaryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "600"} ;
font-size: ${props=>props.type === "total" && "26px"} ;

`
const SummaryItemText  = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
width: 100%;
padding:10px;
 font-weight: 600;
 cursor:pointer;
 padding: 10px;
font-size: 11px;
background-color: transparent ;
cursor: pointer ;
transition:0.1s ease;
&:hover{
       background-color: black ;
       transform:scale(1.02);
       color:white;
    }
`


const Cart = () => {
  return (
    <Container>
        <Announcement2/>
        <Navbar2/>
        
       <Wrapper>
        <Titlu>YOUR CART</Titlu>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
        </TopTexts>
        <TopButton>CHECKOUT</TopButton>
        </Top>
        <Bottom>
            <Info><Product>
                        <ProductDetails>
                                <Image src="https://lp2.hm.com/hmgoepprod?set=source[/da/24/da241e515801f9d7628c754b31bb4be8145a3fda.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[s],hmver[2]&call=url[file:/product/main]"/>
                        <Detail>
                            <ProductName>
                                <b>Product: </b>Slim Fit jumper
                            </ProductName>
                            <ProductId> 
                                <b>ID:</b> 83271320
                            </ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> S </ProductSize>
                        </Detail>
                        </ProductDetails>
                        <PriceDetail>
                           <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>$59.99</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                                <Image src="https://lp2.hm.com/hmgoepprod?set=source[/de/25/de25b345f78e8c44bf6af233755f1870a8fbef7c.jpg],origin[dam],category[men_cardigansjumpers_jumpers],type[DESCRIPTIVESTILLLIFE],res[s],hmver[2]&call=url[file:/product/main]"/>
                        <Detail>
                            <ProductName>
                                <b>Product: </b>Slim Fit jumper
                            </ProductName>
                            <ProductId> 
                                <b>ID:</b> 83271321
                            </ProductId>
                            <ProductColor color="darkgreen"/>
                            <ProductSize><b>Size:</b> M </ProductSize>
                        </Detail>
                        </ProductDetails>
                        <PriceDetail>
                           <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>$59.99</ProductPrice>
                        </PriceDetail>
                    </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
           
                <SummaryItem>
                        <SummaryItemText>Subtotal: </SummaryItemText>
                        <SummaryItemPrice>119.98$</SummaryItemPrice> 
                </SummaryItem>
                <SummaryItem>
                        <SummaryItemText>Delivery fees: </SummaryItemText>
                        <SummaryItemPrice>12.98$</SummaryItemPrice> 
                </SummaryItem>
                <SummaryItem>
                        <SummaryItemText>Shipping discount: </SummaryItemText>
                        <SummaryItemPrice>-12.98$</SummaryItemPrice> 
                </SummaryItem>
                <SummaryItem type="total">
                        <SummaryItemText >Total: </SummaryItemText>
                        <SummaryItemPrice>119.98$</SummaryItemPrice> 
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart