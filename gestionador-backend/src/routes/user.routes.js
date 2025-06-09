import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

async function existeUsuario(name){
    await pool.query('SELECT name FROM usuario WHERE name = $1',[name])
    if (result.rows.length > 0) {
        return true;
    }
    return false;
}

router.post("/user/create",async(req, res) => {
    const {name, password, ci, telefono} = req.body;
    const result = existeUsuario(name);
    if(result){
        res.status(400).send("El usuario ya existe");
        return;
    }else{
        await pool.query('INSERT INTO usuario (name,password,ci,telefono) VALUES ($1, $2, $3, $4)', [name,password,ci,telefono])
        res.status(201).send("Usuario creado exitosamente");
    }
})

export default router;