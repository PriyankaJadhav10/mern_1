import User from '../model/user.model.js';
// import { addUser,getUsers, getUser, editUser,deleteUser } from '../../demo/src/service/api.js';

export const addUser = async (req, res) => {
    const user = req.body;
    //  console.log("user",user);
    const newUser = new User(user)

    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    // console.log('req.params.id',req.params.id);
    try {
        // const user= await user.find({_id:request.params.id})
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const editUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user)

    try {
        await User.updateOne({ _id: req.params.id }, editUser)
        res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        // res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

