
const {verifyToken} = require("./verifyToken");
const {verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");
const Cart = require("../models/Cart");
const router = require("express").Router();


///CREATE CART

router.post("/", verifyToken, async(req,res)=>
    {
        const newCart = new Cart (req.body);
        try{
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);
        }catch(err) {
            res.status(500).json(err);
        }
    }
)

///UPDATES
router.put("/:id", verifyTokenAndAuth, async (req,res) =>
{
   try {
    const UpdatedCart = await Cart.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },{new:true}
    );
    req.status(200).json(UpdatedCart);
}catch(err) {
    res.status(500).json(err);
}
});

///DELETE

router.delete("/:id", verifyTokenAndAuth ,async (req,res)=>
{
    try{

            await Cart.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart deteleted succesfully")

    }catch(err){
        res.status(500).json(err);
    }

})

///GET USER CART

router.get("/find/:userId", verifyTokenAndAuth, async (req,res)=>
{
    try{

            const Cart = await Cart.findOne({userId:req.params.userId});

            res.status(200).json(Cart);

    }catch(err){
        res.status(500).json(err);
    }

})

///GETALL

router.get("/", verifyTokenAndAdmin, async(req,res)=>{

    try {

        const carts = await Cart.find();
        res.status(200).json(carts);

    }catch(err){

        res.status(500).json(err);

    }

})


module.exports=router;