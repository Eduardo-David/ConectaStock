import { Router } from "express";
import { pool } from "../db.js";
import bcrypt from "bcrypt";
import { existeUsuario, createUser } from "./user.service.js";

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

export default router;