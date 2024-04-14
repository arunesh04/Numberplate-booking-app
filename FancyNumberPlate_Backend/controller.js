const { NumberPlate, User, Admin } = require('./schema');

//user
module.exports.insertUser = async (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region
        // bookedPlates:req.body.bookedPlates
    })
    await user.save();
    res.send({msg:"User Added Sucessfully !"});
}

module.exports.deleteUser=async(req,res)=>{
    const user=await User.findOneAndDelete({ name:req.params.name})
    if(user)
        res.send("user is delete successfully")
    else
        res.send("user is not exist")    
}

module.exports.getallUser = async (req,res) => {
    const user = await User.find({});
    res.send(user)
}

module.exports.getUser = async (req,res) => {
    const user = await User.findOne({name:req.params.name});
    if(user)
        res.send(user)
    else
        res.send({msg:"user not found!"});
}
module.exports.updateUser=async(req,res)=>{
    const user=await User.findOneAndUpdate({name:req.params.name},{$set:{ email: req.body.email,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region}},{new:true})
        if(user)
            res.send("user updated")
        else
            res.send("user not found")    
}



//admin
module.exports.insertAdmin = async (req,res) => {
    const admin = new Admin({
        adminid:req.body.adminid,
        name: req.body.name,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region,
        enteredPlates:req.body.enteredPlates
    })
    await admin.save();
    res.send({msg:"Admin Added Sucessfully !"});
}

module.exports.getallAdmin = async (req,res) => {
    const admin = await Admin.find({});
    res.send(admin)
}
module.exports.getAdmin = async (req,res) => {
    const admin = await Admin.findOne({adminid:req.params.adid});
    if(admin)
        res.send(admin)
    else
        res.send({msg:"Admin not found!"});
}

module.exports.deleteAdmin = async (req,res) => {
    const admin = await Admin.findOneAndDelete({adminid:req.params.adid});
    if(admin)
        res.send("Admin Deleted Sucessfully!");
    else
        res.send("Admin Doesn't Exist!");
}
module.exports.updateAdmin=async(req,res)=>{
    const admin=await Admin.findOneAndUpdate({adminid:req.params.adid},{$set:{ name: req.body.name,
        mobno:req.body.mobno,
        password:req.body.password,
        city:req.body.city,
        region:req.body.region,
        enteredPlates:req.body.enteredPlates}},{new:true})
        if(admin)
            res.send("Admin updated")
        else
            res.send("Admin not found")    
}

//numberplate

module.exports.insertNumplate = async (req,res) => {
    const numberplate = new NumberPlate({
        plateId: req.body.plateId,
        plateNumber:req.body.plateNumber,
        platePrize:req.body.platePrize,
        bookedBy:req.body.bookedBy,
    })
    await numberplate.save();
    res.send({msg:"Number Added Sucessfully !"});
}

module.exports.getallNumberplate = async (req,res) => {
    const numplate = await NumberPlate.find({});
    res.send(numplate)
}
module.exports.getNumberplate = async (req,res) => {
    const numberplate = await NumberPlate.findOne({plateId:req.params.pid});
    if(numberplate)
        res.send(numberplate)
    else
        res.send({msg:"Plate not found!"});
}

module.exports.deleteNumberplate = async (req,res) => {
    const numberplate = await NumberPlate.findOneAndDelete({plateid:req.params.plateId});
    if(numberplate)
        res.send("Numberplate Deleted Sucessfully!");
    else
        res.send("Numberplate Doesn't Exist!");
}
module.exports.updateNumberplate=async(req,res)=>{
    const numberplate=await NumberPlate.findOneAndUpdate({plateid:req.params.plateId},{$set:{ plateNumber:req.body.plateNumber,
        platePrize:req.body.platePrize,
        bookedBy:req.body.bookedBy}},{new:true})
        if(numberplate)
            res.send("Plate updated")
        else
            res.send("Plate not found")    
}