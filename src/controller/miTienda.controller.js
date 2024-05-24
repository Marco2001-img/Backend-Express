const mitiendaController ={}

mitiendaController.getUsuarios = (req,res)=>{
   res.send('todos lo usuarios')
}
mitiendaController.nuevoUsuario=(req,res)=>{
    res.send('crear cuenta')
}
mitiendaController.login=(req,res)=>{
    res.send('login')
}

module.exports=mitiendaController