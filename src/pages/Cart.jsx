import {Add, Details, Remove, Title } from '@material-ui/icons'
import styled from 'styled-components'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Navbar2 from '../components/Navbar2'
import Announcement2 from '../components/Announcement2'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect } from 'react'
import {userRequest} from "../requestMethods"
import {useHistory, useNavigate} from 'react-router'



const KEY = process.env.REACT_APP_STRIPE;


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
background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
color:black;
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
    const cart = useSelector(state=>state.cart)
const [stripeToken,setStripeToken] = useState(null)
const history = useNavigate();

const onToken = (token) => {
    setStripeToken(token);
}


useEffect(()=>{
    const makeRequest = async() =>{
        try{
            const res = await userRequest.post("/checkout/payment",{
            tokenId: stripeToken.id,
            amount:200,
        });
            
            history("/success",{state:{stripeData:res.data, products:cart,}});
        }catch{}
    };
    stripeToken && makeRequest();
},[stripeToken,cart.total.toFixed(2),history]);

  return (
    <Container>
        <Announcement2/>
        <Navbar2/>
        
       <Wrapper>
        <Titlu>YOUR CART</Titlu>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
            <TopText>Shopping Bag</TopText>
            <TopText>Your Wishlist</TopText>
        </TopTexts>
        <TopButton>CHECKOUT</TopButton>
        </Top>
        <Bottom>
            <Info>
                {cart.products.map(product=>(
                    <Product>
                        <ProductDetails>
                                <Image src={product.img} />
                        <Detail>
                            <ProductName>
                                <b>Product: </b>{product.title}
                            </ProductName>
                            <ProductId> 
                                <b>ID:</b> {product._id}
                            </ProductId>
                            <ProductColor color={product.color} /> 
                            <ProductSize>
                                <b>Size:</b> {product.size}
                            </ProductSize>
                        </Detail>
                        </ProductDetails>
                        <PriceDetail>
                           <ProductAmountContainer>
                            <Add/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove/>
                           </ProductAmountContainer>
                           <ProductPrice>${(product.price*product.quantity).toFixed(2)}</ProductPrice>
                        </PriceDetail>
                    </Product>
                    ))}
                    <Hr/>
             
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
           
                <SummaryItem>
                        <SummaryItemText>Subtotal: </SummaryItemText>
                        <SummaryItemPrice>${cart.total.toFixed(2)}</SummaryItemPrice> 
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
                        <SummaryItemPrice>${cart.total.toFixed(2)}</SummaryItemPrice> 
                </SummaryItem>
                <StripeCheckout
                name = "TAP"
                image = "https://avatars.githubusercontent.com/u/73787063?v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total.toFixed(2)}`}
                amount = {cart.total.toFixed(2)*100}
                token = {onToken}
                stripeKey = {"pk_test_51Lt98QLEVBTAGzNr1glATqQN4VmEbLMLD1CQ4HUtTU5eNScwQ8K6yQ0z3uPbWQTO0kBMbUmRYywQjvE0CblJ8hia00KMN0Wo2B"}
                >
                <SummaryButton>CHECKOUT NOW</SummaryButton>
                </StripeCheckout>
            </Summary>
        </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart