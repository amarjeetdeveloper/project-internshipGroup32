const collegeModel = require("../model/CollegeModel")
const {validString} = require("../utils/validation")

const createCollege = async function(req,res){
    try{
    let data = req.body;
    if (Object.keys(data).length==0) return res.status(400).send({status:false, msg: "please provide data"})
    if (!data.name) return res.status(400).send({ status: false, msg: "name is Required"})
    if (!data.fullName) return res.status(400).send({ status: false, msg: "fullName is Required"})
    if (!data.logoLink) return res.status(400).send({ status: false, msg: "logoLink is Required"})

    if (validString.test(data.name)) return res.status(400).send({status:false, msg: "please provide valid name"})
    if (validString.test(data.fullName)) return res.status(400).send({status:false, msg: "please provide valid fullName"})

    let nameCheck = await collegeModel.findOne({ name: data.name })
    if (nameCheck) return res.status(401).send({status:false, msg:"name is already used"})

    let saveData = await collegeModel.create(data)
    res.status(201).send({ status: true, msg:"college Created Sucessfully",data:saveData })
}
    catch(err){
    res.status(500).send({ status:false,message:err.message })
}
}

module.exports = {createCollege}