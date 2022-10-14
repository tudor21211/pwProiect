
const {verifyToken} = require("./verifyToken");
const {verifyTokenAndAuth,verifyTokenAndAdmin} = require("./verifyToken");
const User = require("../models/User");
const router = require("express").Router();

///UPDATES
router.put("/:id", verifyTokenAndAuth, async (req,res) =>
{
   if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt
    (req.body.password,process.env.SECRET_PASS)
    .toString();
   }
   try {
    const UpdatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },{new:true}
    );
    req.status(200).json(UpdatedUser);
}catch(err) {
    res.status(500).json(err);
}
});

///DELETE

router.delete("/:id", verifyTokenAndAuth ,async (req,res)=>
{
    try{

            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User deteleted succesfully")

    }catch(err){
        res.status(500).json(err);
    }

})

///GETUSER

router.get("/find/:id", verifyTokenAndAdmin ,async (req,res)=>
{
    try{

            const user = await User.findById(req.params.id);
            const {password, ...others} = user._doc;
            res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }

})

///GETALLUSER

router.get("/", verifyTokenAndAdmin ,async (req,res)=>
{
    const query = req.query.new;
    try{

            const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
        
            res.status(200).json(users);

    }catch(err){
        res.status(500).json(err);
    }

})

///GET USER STATS

router.get("/stats",verifyTokenAndAdmin, async (req,res) =>
    {
        
    }
)

module.exports=router;