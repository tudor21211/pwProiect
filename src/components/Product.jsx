import styled from "styled-components"
import { AddShoppingCartOutlined, FavoriteBorderOutlined, Search } from "@material-ui/icons";
const Container = styled.div`

    flex:1;
    margin: 6px;
    min-width:280px ;
    height: 350px;;

`

const Circle = styled.div `

`


const Image = styled.img `
height: 75%;

`


const Info = styled.div `

`


const Icon = styled.div `

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