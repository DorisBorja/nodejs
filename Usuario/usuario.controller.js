
const Usuario = require('./usuario.dao')


exports.createUsuario = (req,res,next)=>{
    console.log('hola')
    const  usuario = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    Usuario.login( req.body.email,function (err, usu) {
        if (err) console.log(err);
        if(usu[0] == undefined){

           Usuario.create(usuario,(err, usue)=>{
                if (err) res.send(err);
                res.json({token: usue._id})
              })
        }else{
            res.json({error: 'usuario ya existe'})
        }
        
    });
    
   
}



exports.iniciarSesion = (req,res,next)=>{
   
    Usuario.login( req.body.email ,function (err, usuario) {
        console.log(usuario[0].password)
        if (err) console.log(err);
        
        if(req.body.password == usuario[0].password){
            res.json({token: usuario[0].id})
        }
        
    });
}