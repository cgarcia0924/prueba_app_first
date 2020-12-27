const express = requiere('express');
const app = express();

app.get('/', (req, res) => res.send('hola carlos'));

app.listen(3000);

console.log("server on port", 3000);