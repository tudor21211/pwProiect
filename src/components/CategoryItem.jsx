import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
margin: 5px ;
height: 70vh;
position:relative;
margin-bottom:110px ;
`

const Image = styled.img`
  width:100%;
  height: 120%;
  min-width: 450px;
  object-fit:cover;

  
`
const Title = styled.h1`
color: black;
margin-bottom: 10px;
`
const Info = styled.div`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction: column ;
align-items: center ;
justify-content: center;
width: 100%;
height: 20% ;

`
const Button = styled.button`
  border : none;
  padding: 10px;
  color:white;
  background-color: black;
  cursor:pointer;
  transition:0.1s ease-in;
&:hover{
       background-color: #535756 ;
       transform:scale(1.1);
    }
  
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
          <Title>
            {item.title}
          </Title>
          <Button>SHOP NOW</Button>
      </Info>
            
      </Link>
    </Container>
  )
}

export default CategoryItem