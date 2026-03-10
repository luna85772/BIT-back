const express = require('express');
const app = express();
const port = 3000;

// Middleware para entender JSON
app.use(express.json());

//PRODUCTOS
const products= [

{   id: 1,
    name: "Juliana",
    email: "Juli123@gmail.com",
},
{
    id: 2,
    name: "María",
    email: "Maria@gmail.com",
},
{
    id: 3,
    name: "Ana",
    email: "Ana@gmail.com",
}
]

// Ruta GET (Consultar)
app.get('/usuarios', (req, res) => {
  res.status(200).json(products);
});

// Ruta POST (Crear)
app.post('/usuarios', (req, res) => {
    const { name, email } = req.body;
    console.log('Datos recibidos:', req.body);
    console.log(`Usuario recibido: Nombre - ${name}, Email - ${email}`);
    const NewProduct = {
        id: products.length + 1,
        name : name,
        email : email,
    }
    products.push(NewProduct);
    res.status(201).json(NewProduct);
});
//
// Ruta PUT (Actualizar)
app.put('/usuarios/:id', (req, res) => {
    const { name, email } = req.body;
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index !== -1) {
        products[index] = { ...products[index], name, email };
        res.status(200).json({ 
            message: `Usuario ${req.params.id} actualizado`, 
            usuario: products[index] 
        });
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});

// Ruta DELETE (Eliminar)

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id); 

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const usuarioEliminado = products[index];
    products.splice(index, 1);
    res.status(200).json({
        message: "Usuario eliminado con éxito",
        usuario: usuarioEliminado
    });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});