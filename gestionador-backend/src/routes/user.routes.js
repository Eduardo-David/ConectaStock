import { Router } from "express";
import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { existeUsuario, createUser, existePassword, getIdByName, ifRole } from "./user.service.js";
import  jwt from "jsonwebtoken";
import { SECRET_JWT_TOKEN } from "../config.js";

const router = Router();

router.post("/user/create",async(req, res) => {
    try{
    console.log("llego el endpoint",req.body);
    const {name, password, ci, telefono,role} = req.body;
    const nameExists = await existeUsuario(name);
    console.log("verificando name y password existe:", nameExists);
    if(nameExists){
        res.status(400).json({ success: false, message: "El usuario ya existe" });
        return;
    }
        const passwordHash = await bcrypt.hash(password, 10);
    await createUser(name, passwordHash, ci, telefono, role);
    res.status(201).json({ success: true, message: "Usuario creado exitosamente" });
        return;
}   catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ success: false, message: "Error al crear el usuario" });
  } 
})

router.post("/user/login", async (req, res) => {
    const { name, password, role} = req.body; 
    console.log('llegaron las credenciales',req.body);
    const passwordExists=await existePassword(name, password);
    const roleExists= await ifRole(name, role) ;
    const idExists= (await getIdByName(name)) !== null;
    console.log(passwordExists,roleExists,idExists);
    try{
        if(idExists && roleExists && passwordExists){
            const  token = jwt.sign({ id: getIdByName(name), username: name },SECRET_JWT_TOKEN, { expiresIn: '1h' })
            .res.cookie('acces_token',token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Asegúrate de que esto sea true en producción
                sameSite: 'strict', // Asegúrate de que esto sea 'strict' o 'lax' según tus necesidades
            });
            res.status(200).json({ success: true, message: "Inicio de sesión exitoso"});
        }else{
            return res.status(401).json({ success: false, message: "Credenciales incorrectas" });
        }

    }catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).json({ success: false, message: "Error al iniciar sesión" });
    }
})



export default router;