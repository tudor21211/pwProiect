import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right:10px;
`

const Select = styled.select`
 margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 400;
  font-size: 0.9rem;
  color: black;
  background: #ffffff;
  border-radius: 5px ;
  margin-right:5px ;
  cursor:pointer;
  transition:1s ease;
    
`
const Option = styled.option`
    background-color: grey ;
    color:white;  
    border-radius: 5px ;

   
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Skirts</Title>
        <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>
                            White
                        </Option>
                        <Option>
                            Red
                        </Option>
                        <Option>
                            Black
                        </Option>
                        <Option>
                            Yellow
                        </Option>
                        <Option>
                            Orange
                        </Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>
                            XS
                        </Option>
                        <Option>
                            S
                        </Option>
                        <Option>
                            M
                        </Option>
                        <Option>
                            L
                        </Option>
                        <Option>
                            XL
                        </Option>
                    </Select>
                </Filter>
                <Filter>
                    
                <FilterText>Sort Products</FilterText>
                <Select>
                        <Option selected>
                            Newest
                        </Option>
                        <Option>
                            Price(asc)
                        </Option>
                        <Option>
                            Price(desc)
                        </Option>
                    </Select>
                </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList