///PAY.jsx
import StripeCheckout from "react-stripe-checkout";
import {useState,useEffect} from "react"
import axios from "axios"
import {useHistory} from "react-router"
const KEY = "pk_test_51Lt98QLEVBTAGzNr1glATqQN4VmEbLMLD1CQ4HUtTU5eNScwQ8K6yQ0z3uPbWQTO0kBMbUmRYywQjvE0CblJ8hia00KMN0Wo2B"
const Pay = () =>{

    const [stripeToken,setStripeToken] = useState(null);
    const history = useHistory();
     const onToken = (token) =>{
            setStripeToken(token);
     };

     useEffect(()=>{
        const makeRequest = async () =>{
            try{
                const res = await axios.post(
                    "http://localhost:5000/api/checkout/payment",
                {
                    tokenId:stripeToken.id,
                    amount:2000,
                }
           );
           console.log(res.data);
                history.push("/success");
        }
     
            catch(err){
                console.log(err)
            }
        };
       if (stripeToken) makeRequest();
     },[stripeToken,history])

    return(

        <div
            style = {{
                height:"100vh",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}
        > {stripeToken ? (<span>Processing. Please wait...</span>) : (
            <StripeCheckout
            name = "TAP"
            image = "https://avatars.githubusercontent.com/u/73787063?v=4"
            billingAddress
            shippingAddress
            description="Your total is $20"
            amount = {2000}
            token = {onToken}
            stripeKey = {KEY}
            >
        <button
            style = {{
                border:"none",
                width:120,
                borderRadius:5,
                padding:"20px",
                backgroundColor:"black",
                color:"white",
                fontWeight:"500",
                cursor:"pointer",
            }}
        >Pay Now 
        </button>
        </StripeCheckout>)}
        </div>
    );
};

export default Pay;