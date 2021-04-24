
const usuario = require('./usuario.controller');
module.exports = (router)=>{
    router.post('/usuario-register',usuario.createUsuario);
    router.post('/usuario-login',usuario.iniciarSesion);

}