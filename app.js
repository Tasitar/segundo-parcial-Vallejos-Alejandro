import { express } from "express";
import { Sequelize } from "sequelize";

configDotenv.config()
app.use(express.json())

try{
    await Sequelize.autenticate();
    console.log('hola soy el server estoy conectado')
}catch(error){
    console.log('hola soy el server y no hay un error al conectarme')
}

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log ('hola soy el server y estoy corriendo')
})
