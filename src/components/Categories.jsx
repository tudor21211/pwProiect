import  styled  from "styled-components"
import CategoryItem from "./CategoryItem"
import {categories} from "../data";
import {mobile} from "../responsive"
const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding:20px;
  justify-content: space-between ;
  background-color: white ;
  ${mobile({flexDirection:"column",padding:"0px",margin:"0px"})}
`

const Categories = () => {
  return (
    <Container>
       {
        categories.map((item)=>
          <CategoryItem item={item} key={item.id}/>
          )
       }
    </Container>
  )
}

export default Categories