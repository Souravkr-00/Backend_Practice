const User = require("../models/user.js");

async function handleGetAllUsers(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    return res.json(user);
}

async function handleUpdateUserById(req,res){
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id,{
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        jobTitle:body.job_title,
        gender:body.gender
    });

    return res.json({msg:"update successfully"})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    res.json({msg:"successfully delete the User"});
}

async function handleCreateNewUser(req,res){
    const body = req.body;
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        jobTitle:body.job_title,
        gender:body.gender
    });
    console.log(result);
    res.status(201).json({msg:"user created successfully",id: result._id});
    if(!body) res.json({msg:"Error Occured in DB"});
}

module.exports = {
    handleCreateNewUser,
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById

}