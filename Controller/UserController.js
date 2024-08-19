import prisma from "../DB/db.config.js";

export async function handleUserData(req,res){
    const {name, email, password} = req.body;
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(findUser) {return res.status(400).json({msg: "Email Already taken. Try another email"})}
    const newUser = await prisma.user.create({
        data:{
            name: name,
            email: email,
            password: password,
        }
    })
    return res.status(200).json({msg: "User created", data:newUser});
}
export async function handleUserUpdate(req,res){
    const userId = req.params.id;
    const {name, email, password} = req.body;

    const updateUser = await prisma.user.update({
        where:{
            id: Number(userId)
        },
        data:{
            name:name,
            email: email,
            password: password
        }
    })
    return res.status(200).json({msg:"User updated successfully", data: updateUser})
}
export async function handleGetUser(req,res){
    const getUsers = await prisma.user.findMany({})
    return res.status(200).json({msg: "Users returned", data: getUsers})
}
export async function handleShowUser(req,res){
    const userId = req.params.id;
    const user = await prisma.user.findFirst({
        where:{
            id: Number(userId)
        }
    })
    return res.status(200).json({msg:"User found", data: user})
}
export async function handleDeleteUser(req, res){
    const userId = req.params.id;
    const deleteUser = await prisma.user.delete({
        where:{
            id: Number(userId)
        }
    })
    return res.status(200).json({msg:"User deleted", data: deleteUser})
}