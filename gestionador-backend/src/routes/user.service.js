import { pool } from "../db.js";
import bcrypt from "bcrypt";

export async function existeUsuario(name){
    const result = await pool.query('SELECT name FROM usuario WHERE name = $1 LIMIT 1;',[name])
    console.log("resultado de la consulta",result.rows);
    if (result.rows.length > 0) {
        return true;
    }
    return false;
}

export async function createUser(name, password, ci, telefono,role){
     await pool.query('INSERT INTO usuario (name,password,ci,telefono,role) VALUES ($1, $2, $3, $4, $5);', [name,password,ci,telefono,role])
}
