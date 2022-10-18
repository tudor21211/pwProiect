import { useLocation } from "react-router-dom";

const Success = () =>{
    const location = useLocation();
    console.log(location);    
    return(

        <div
            style = {{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"40px"
            }}
        >Your order is being prepared... Thanks for choosing TAP</div>
)}

export default Success;