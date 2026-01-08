import { userList } from "../model/userModel.js"

export default function handleUsers(req,res){
    const  userData=userList()
    console.log(userData);
    
    res.render('user',{users:userData})
    
}