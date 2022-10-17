import {React,useState} from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'
import Announcement2 from '../components/Announcement2'
import { useLocation} from 'react-router-dom';
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
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value,
        });
    };


  return (
    <Container>
        <Announcement2/>
        <Navbar2/>
        <Title>{cat}</Title>
        <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >
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
                            Grey
                        </Option>
                        <Option>
                            Orange
                        </Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >
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
                <Select onChange = {e=>setSort(e.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="asc">
                            Price(asc)
                        </Option>
                        <Option value="desc">
                            Price(desc)
                        </Option>
                    </Select>
                </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList