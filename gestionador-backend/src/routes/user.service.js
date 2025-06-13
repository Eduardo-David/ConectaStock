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

export async function existePassword(name, password){
    const result = await pool.query('SELECT password FROM usuario WHERE name = $1 LIMIT 1;', [name]);
    if (result.rows.length > 0) {
        const isMatch = await bcrypt.compare(password, result.rows[0].password);
        return isMatch;
    }
    return false;
}

export async function getIdByName(name) {
    const result = await pool.query('SELECT id_usuario FROM usuario WHERE name = $1 LIMIT 1;', [name]);
    console.log(result);
    if (result.rows.length > 0) {
        return { id: result.rows[0].id_usuario};
    }
    return null;
}
export async function ifRole(name, role) {
    const result = await pool.query('SELECT role FROM usuario WHERE name=$1 LIMIT 1;', [name]);
    if(result.rows.length>0){
        return role===result.rows[0].role;
    }
    return false;
}
