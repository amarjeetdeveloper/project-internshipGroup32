const Interns = require('../model/internsModel');
const College = require('../model/CollegeModel');
const { validString, validObjectId, validMobileNum, validEmail } = require('../utils/validation');

const addInterns = async function(req, res)  {
  try {
    let data = req.body;

    if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Enter the details to apply for internships" });

    if (!data.name) return res.status(400).send({ status: false, message: "Name is a required" });
    if (!data.email) return res.status(400).send({ status: false, message: "Email is a required" });
    if (!data.mobile) return res.status(400).send({ status: false, message: "Mobile number is a required" });
    if (!data.collegeId) return res.status(400).send({ status: false, message: "College ID is a required" });

    if (validString.test(data.name)) return res.status(400).send({ status: false, message: "Name should be a valid name and should not contain numbers" });
    if (!validEmail.test(data.email)) return res.status(400).send({ status: false, message: "Enter a valid email id" });
    if (!validMobileNum.test(data.mobile)) return res.status(400).send({ status: false, message: "Enter a valid mobile number and it should be of 10 digits" });
    if (!validObjectId(data.collegeId)) return res.status(400).send({ status: false, message: "Enter a valid college id" });
    let getCllgData = await College.findById(data.collegeId);
    if (!getCllgData) return res.status(404).send({ status: false, message: "Enter a valid college id" });

    let getUniqueValues = await Interns.findOne({ $or: [{ email: data.email }, { mobile: data.mobile }] });
    if (getUniqueValues) return res.status(400).send({ status: false, message: "Email or Mobile number already exist" })

    let showInterData = await Interns.create(data);
    res.status(201).send({ status: true, message: "Account created successfully", data: showInterData });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
}

module.exports = { addInterns };