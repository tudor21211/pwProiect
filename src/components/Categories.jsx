import  styled  from "styled-components"
import CategoryItem from "./CategoryItem"
import {categories} from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  padding:20px;
  justify-content: space-between ;
  background-color: white ;
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