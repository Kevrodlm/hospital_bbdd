const express = require("express");
const app = express();
const mysql = require("mysql");

const cors = require("cors");
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({ 
    host: "localhost", 
    user: "root",
    password: "Promundial1?", 
    database: "cine"
});


app.post("/create",(req,res)=>{
    const titulo = req.body.titulo;
    const idioma = req.body.idioma;
    const estudio = req.body.estudio;
    const clasificacion = req.body.clasificacion;
    const sinopsis = req.body.sinopsis;
    const fecha = req.body.fecha;
    db.query('INSERT INTO Peliculas(Titulo,Idioma,Estudio_filmacion,Clasificacion,Sinopsis,fecha) VALUES(?,?,?,?,?,?)',
            [titulo,idioma,estudio,clasificacion,sinopsis,fecha],(err,result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Película registrada con éxito!");
                }
            }
    );
});

app.get("/lista",(req,res)=>{
    db.query('SELECT * FROM Peliculas;',(err,result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send(result);
                }
            }
    );
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
});
