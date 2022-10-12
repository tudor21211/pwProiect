import styled from "styled-components"
import { AddShoppingCartOutlined, FavoriteBorderOutlined, Search } from "@material-ui/icons";


const Info = styled.div `
opacity:0;
width:100% ;
height:100% ;
position:absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2) ;
z-index: 1 ;
display: flex;
align-items: center ;
justify-content: center;
transition: 0.3s;

`

const Container = styled.div`

    flex:1;
    margin: 5px;
    min-width:350px ;
    height: 380px;;
    display: flex ;
    align-items: center;
    justify-content: center;
    background-color: #FCFCFC;
    position:relative;
    &:hover ${Info}{
        opacity:1;
    }
`

const Circle = styled.div `

width: 200px;
height: 200px;
border-radius: 50% ;
background-color: white;
position:absolute;

`


const Image = styled.img `
height: 100%;
z-index: 1 ;

`


const Icon = styled.div `
  width: 50px;
  height: 50px;
  display: flex;
  border-radius:50%;
  background-color: white;
  align-items: center ;
  justify-content: center;
  margin:7px;
  transition:all 0.14s ease;
  cursor:pointer;
  &:hover{
    background-color: #BBFDF5;
    transform:scale(1.1);
  }

`

const Product = ({item}) => {
  return (
    <Container>
            <Circle />
            <Image src={item.img}/>
            <Info>
                 <Icon>
                <AddShoppingCartOutlined  />
                 </Icon>
                 <Icon>
                <Search />
                 </Icon>
                 <Icon>
                <FavoriteBorderOutlined />
                 </Icon>
            </Info>
    </Container>
  )
}

export default Product