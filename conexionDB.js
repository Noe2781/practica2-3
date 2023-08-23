import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Alma2012",
    database: "GruposMusicalesRock"
   

});
/* 
let resultado = await pool.query("SHOW TABLES;");

console.log(resultado); */

/* await agregarGrupo('Led Zeppelin', 'Rock clásico', 1968, 'Reino Unido',);


async function agregarGrupo(Nombre, Genero, AnioFormacion, PaisOrigen) {
    let resultadoCrear = await pool.query(`INSERT INTO GruposRock (Nombre, Genero, AnioFormacion, PaisOrigen)
VALUES(?,?,?,?)`,[Nombre, Genero, AnioFormacion, PaisOrigen]);

    console.log(resultadoCrear);
} */

/*  await obtenerGrupoRock();

 async function obtenerGrupoRock () {
    let resultadoObtenerInfo = await pool.query("SELECT * FROM  GruposRock ");
    console.table(resultadoObtenerInfo[0]);
} */


/* await obtenerGrupoRock(); */
/* await actualizarGrupoRock('Led Zeppelin', 'Rock clásico', 1969);

async function actualizarGrupoRock(nombre, genero, anioFormacion) 
  try {
    let resultadoActualizar = await pool.query(
      'UPDATE GruposRock SET Genero = ?, AnioFormacion = ? WHERE Nombre = ?',
      [genero, anioFormacion, nombre]
    );
  
    console.log(resultadoActualizar)
  } */


/* let resultadoEliminar = await pool.query("DELETE FROM GruposRock WHERE ID = 10;");
console.log(resultadoEliminar); */

pool.end();