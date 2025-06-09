import pg from 'pg';

export const pool = new pg.Pool({
    user:"postgres",
    host:"localhost",
    database:"gestionador",
    password:"1234",
    port:5432
})
pool.query('SELECT NOW()').then(res => {
    console.log(res)
})
