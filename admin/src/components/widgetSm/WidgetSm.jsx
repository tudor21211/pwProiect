import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";
import { useEffect, useState } from "react";

export default function WidgetSm() {

const [users, setUsers] = useState([])

useEffect(()=>{
  const getUsers = async () =>{
    try{
    const res = await userRequest.get("users/?new=true")
    setUsers(res.data)
  }catch{}
};

getUsers();

},[])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map((user)=>(
        <li className="widgetSmListItem" key={user._id} >
          <img
            src={user.img || "https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>))}
      </ul>
    </div>
  );
}
