import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import {Link} from "react-router-dom"
const Success = () =>{
    const location = useLocation();
    
    const data = location.state.stripeData;
    const cart = location.state.products;   
    console.log(cart)
    console.log(data)
    const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        console.log(data);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

    return(

        <div
            style = {{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"40px"
            }}
        >
             {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link to='/'><button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link></div>
)}

export default Success;