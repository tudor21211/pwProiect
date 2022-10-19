
const {verifyToken} = require("./verifyToken");
const {verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");
const Order = require("../models/Order");
const router = require("express").Router();


///CREATE Order

router.post("/", verifyToken, async(req,res)=>
    {
        const newOrder = new Order (req.body);
        try{
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder);return;
        }catch(err) {
            res.status(500).json(err);
        }
    }
)

///UPDATES
router.put("/:id", verifyTokenAndAdmin, async (req,res) =>
{
   try {
    const UpdatedOrder = await Order.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },{new:true}
    );
    req.status(200).json(UpdatedOrder);
}catch(err) {
    res.status(500).json(err);
}
});

///DELETE

router.delete("/:id", verifyTokenAndAdmin ,async (req,res)=>
{
    try{

            await Order.findByIdAndDelete(req.params.id);
            res.status(200).json("Order deleted succesfully")

    }catch(err){
        res.status(500).json(err);
    }

})

///GET USER Order

router.get("/find/:userId", verifyTokenAndAuth, async (req,res)=>
{
    try{

            const orders = await Order.find({userId:req.params.userId});

            res.status(200).json(orders);

    }catch(err){
        res.status(500).json(err);
    }

})

///GETALL

router.get("/", verifyTokenAndAdmin, async(req,res)=>{

    try {

        const Orders = await Order.find();
        res.status(200).json(Orders);

    }catch(err){

        res.status(500).json(err);

    }

})


//GET MONTHLY INCOME

router.get("/income",verifyTokenAndAdmin, async(req,res)=>{

    const productId = req.query.pid;

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try {

        const income = await Order.aggregate([
            {
                $match:{createdAt:{$gte:prevMonth}, ...Order(productId && {
                    products:{$elemMatch:{productId}},
                })}
            },{
            $project: {
            month:{$month:"$createdAt"},
            sales:"$amount"
            },
        },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            }
        ])

        res.status(200).json(income);

    }catch(err){
        res.status(500).json(err);
    }

})

module.exports=router;