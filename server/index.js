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
    database: "veterinaria"
});


app.post("/create",(req,res)=>{
    const nombres = req.body.nombres;
    const apellidop = req.body.apellidop;
    const apellidom = req.body.apellidom;
    const direccion = req.body.direccion;
    const telefeno = req.body.telefeno;
    const edad = req.body.edad;
    const cantidadmas = req.body.cantidadmas;
    db.query('INSERT INTO Cliente(Nombres,Apellido_paterno,Apellido_materno,Dirección,Teléfono,Edad,Cantidad_mascotas) VALUES(?,?,?,?,?,?,?)',
            [nombres,apellidop,apellidom,direccion,telefeno,edad,cantidadmas],(err,result) => {
                if(err){
                    console.log(err);
                }else{
                    res.send("Cliente registrado con éxito!");
                }
            }
    );
});

app.get("/lista",(req,res)=>{
    db.query('SELECT * FROM Cliente;',(err,result) => {
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
