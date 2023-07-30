const users= require ('../utils/users.js')
const login =(req, res)=>{

    const {email, password}=req.query;
    let access=false;

    users.forEach((user)=>{
        if(user.email === email && user.password === password){
            access= true
        }
    })
    
    return res.status(200).json({access})
    
    // se puede hacer con find
    
    // const user=  users.find((char)=>{char.email===email && char.password=== password})
    // if(user)
    // {
    //     return res.status(200).json({access: true})
    // }
    // else{
    //     return res.status(200).json({access: false})
    // }
    

}

module.exports= login;