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
app.post("/signup", (req, res) => {
    const dni = req.body.dni;
    const nombre = req.body.nombre;
    const apelli_pat = req.body.apelli_pat;
    const apelli_mat = req.body.apelli_mat;
    const telefono = req.body.telefono;
    const fecha_nac = req.body.fecha_nac;
    const nacionalidad = req.body.nacionalidad;
    const genero = req.body.genero;
    const email = req.body.email;
    const password = req.body.password;
    db.query('INSERT INTO USUARIO(dni,nombre,apellidoP,apellidoM,fecha_nac,telefono,genero,nacionalidad,email,contrasena) VALUES(?,?,?,?,?,?,?,?,?,?)',
        [dni, nombre, apelli_pat, apelli_mat, fecha_nac, telefono, genero, nacionalidad, email, password], (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al procesar la solicitud");
            } else {
                res.status(200).send("Te registraste con éxito!");
            }
            return res.json(data)
        }
    );
});
app.post("/login", (req, res) => {
   
    const sql = "SELECT * FROM USUARIO WHERE email = ? AND contrasena = ? ";
    db.query(sql,[req.body.email,req.body.password ], (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al procesar la solicitud");
            } 
            if(data.length > 0){
                return res.json("Iniciaste sesión con éxito!")
            }
            else{
                return res.json("Algo fallo")
            }
            
        }
    );
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
});
