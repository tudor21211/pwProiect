import { Add, AddCircle, Description, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Navbar2 from '../components/Navbar2'
import Announcement2 from '../components/Announcement2'
import {useLocation} from 'react-router';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {publicRequest} from "../requestMethods"
import { addProduct } from '../redux/cartRedux'
import {useDispatch} from "react-redux"

const Container = styled.div`

`
const Wrapper = styled.div`
padding:50px;
display: flex;
`;

const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width: 100% ;
height:90vh ;
object-fit:cover ;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;
const Title = styled.h1`
font-weight: 400 ;
`;
const Desc = styled.p`
    margin:20px 0px;
`;

const Price = styled.span`
font-weight:100;
font-size:40px;
`;
const Composition = styled.div`
margin-bottom:10px;
font-weight:200;  
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50% ;
margin:30px 0px;
`

const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 30px;
font-weight:200 ;

`
const FilterSize = styled.select`
 margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 0.7rem;
  color: black;
  background: #ffffff;
  border-radius: 5px ;
  margin-right:5px ;
  cursor:pointer;
  transition:1s ease;
  margin-top:15px;
  margin-left:10px;

`
const FilterColor = styled.div`
width: 20px ;
height: 20px ;
border-radius: 60% ;
background-color: ${props=>props.color} ;
margin:10px 1px 5px 5px;
cursor:pointer;

`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`

    display: flex;  
    align-items: center;
    width: 40% ;
    justify-content: space-between;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 400 ;
cursor:pointer;
`
const Amount = styled.span`

    width: 40px;
    height: 40px ;
    border-radius: 10px ;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:0px 5px;
    cursor: auto;

`
const Button = styled.button`

margin-bottom: 0.8em;
  padding: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 0.7rem;
  color: black;
  margin-right:5px ;
  cursor:pointer;
  transition:1s ease;
  margin-top:15px;
  margin-left:10px;
  border-width:2px ;
  border-color:#a3bdbc;
  background-color:white;
  transition:0.3s ease;
  &:hover{
        background-color: #DAF7E2;
    }

`



const Product = () => {
    const location = useLocation();
    const id = (location.pathname.split("/")[2]);

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>
   {
    const getProduct = async () =>{
      try{
          const res = await publicRequest.get("/products/find/"+id);
        setProduct(res.data);
        }catch(err){

      }
    }
    getProduct();
   },[id]
    )


   const handleQuantity=(type) => {
    if (type==="dec") {
        quantity>1 && setQuantity(quantity-1);
    }
    else {
        setQuantity(quantity+1);
    }
   }


   const handleClick=()=>
   {dispatch(
    addProduct({...product, quantity}));
   }

  return (
    <Container>
       <Announcement2/>
       <Navbar2/>
       <Wrapper>
                <ImgContainer>
                        <Image src={product.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Desc>
                    {product.desc}
                    </Desc>
                    <Composition>Composition: 100% cotton</Composition>
                    <Price>
                        ${product.price}
                    </Price>
                    <FilterContainer>
                        
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map(s=>(
                    <FilterSizeOption key={s}>
                                    {s}
                    </FilterSizeOption>
                                ))}
                               
        
                            </FilterSize>
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            {product.color?.map((c)=>(
                                <FilterColor color={c} key={c}/>
                            ))}
                            
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <AddCircle onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
       </Wrapper>
       <Newsletter/>
       <Footer/>
    </Container>
  )
}

export default Product