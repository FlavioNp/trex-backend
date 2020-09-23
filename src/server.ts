import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de Clientes');

    return response.json([
        'Flavio',
        'Maiara',
        'Miguel',
        'Cris'
    ]);
});

app.post('/users', (request, response) => {
    const  user = {
        name: 'Flavio',
        email: 'flaviopzn@gmail.com'
    };

    return response.json(user);
});

app.listen(3000);