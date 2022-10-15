
const {verifyToken} = require("./verifyToken");
const {verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");
const Product = require("../models/Product");
const router = require("express").Router();


///CREATE PRODUCT

router.post("/", verifyTokenAndAdmin, async(req,res)=>
    {
        const newProduct = new Product (req.body);
        try{
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        }catch(err) {
            res.status(500).json(err);
        }
    }
)

///UPDATES
router.put("/:id", verifyTokenAndAdmin, async (req,res) =>
{
   try {
    const UpdatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },{new:true}
    );
    req.status(200).json(UpdatedProduct);
}catch(err) {
    res.status(500).json(err);
}
});

///DELETE

router.delete("/:id", verifyTokenAndAdmin ,async (req,res)=>
{
    try{

            await Product.findByIdAndDelete(req.params.id);
            res.status(200).json("Product deteleted succesfully")

    }catch(err){
        res.status(500).json(err);
    }

})

///GETPRODUCT

router.get("/find/:id",async (req,res)=>
{
    try{

            const product = await Product.findById(req.params.id);

            res.status(200).json(product);

    }catch(err){
        res.status(500).json(err);
    }

})

///GETALLPRODUCTS

router.get("/", async (req,res)=>
{
    const queryNew = req.query.new;
    const queryCategory = req.query.category;

    try{
        let products;
         if(queryNew) {
            products = await Product.find().sort({createdAt: -1}).limit(5)

         }
         else if (queryCategory) {
            products = await Product.find({categories:{
                $in :[queryCategory],
            },
        });
           
         }
         else {
            products = await Product.find();
        }
        
            res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }

})


module.exports=router;