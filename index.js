const express = require('express');
const app = express();
const port = 3000;

// Middleware para entender JSON
app.use(express.json());

//PRODUCTOS
const products= [

{   id: 1,
    name: "",
    email: "",
},
{
    id: 2,
    name: "",
    email: "",
},
{
    id: 3,
    name: "",
    email: "",
}
]

// Ruta GET (Consultar)
app.get('/', (req, res) => {
  res.send('¡Hola Mundo! API bit-back funcionando.');
});

// Ruta POST (Crear)
app.post('/usuarios', (req, res) => {
    const { name, email } = req.body;
    console.log('Datos recibidos:', req.body);
    console.log(`Usuario recibido: Nombre - ${name}, Email - ${email}`);
    const NewProduct = {
        id: products.length + 1,
        name,
        email
    }
    products.push(NewProduct);
    res.status(201).json(NewProduct);
});
//
// Ruta PUT (Actualizar)
app.put('/usuarios/:id', (req, res) => {
  console.log(`Usuario ${req.params.id} actualizado (PUT)`);
  res.status(200).json({ message: `Usuario ${req.params.id} actualizado (PUT)` });
  
});
//
// Ruta DELETE (Eliminar)
app.delete('/usuarios/:id', (req, res) => {
    console.log(`Usuario ${req.params.id} eliminado (DELETE)`);
    res.status(200).json({ message: `Usuario ${req.params.id} eliminado (DELETE)` });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});