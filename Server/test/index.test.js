const server = require('../src/app');
const session = require('supertest');
const agent = session(server);


describe('Test de RUTAS',()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it( 'Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            let response = (await agent.get('/rickandmorty/character/1')).text;
            response= JSON.parse(response)
            
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })

        it('Si hay un error responde con status: 500', async()=>{
           let response= (await agent.get('/rickandmorty/character/1000')).status

           expect(response).toBeGreaterThanOrEqual(400)

        })
    })

    describe('GET /rickandmorty/login', ()=>{
        it('Las credenciales son correctas', async()=>{
            let response= (await agent.get('/rickandmorty/login=rick@mail.com?email=&password=pass123')).body

            expect(response.access).toBeTruthy()
        })

        it('Las credenciales son incorrectas', async()=>{
            let response= (await agent.get('/rickandmorty/login=rio@mail.com?email=&password=password123')).body

            expect(response.access).toBeFalsy()
        })

    })

    describe('POST /rickandmorty/fav', ()=>{
        const character1={
            id:827,
            name: 'Ricki'
        }

        const character2={
            id:828,
            name: 'Mortygan'
        }

        it('Devuelve personaje enviado por body',async ()=>{
            let response = ((await agent.post('/rickandmorty/fav')).send(character1)).body;
            expect(response).toContainEqual(character1)
        })

        it('Debe devolver los personajes anterior mas el actual', async ()=>{
            let response = ((await agent.post('/rickandmorty/fav')).send(character2)).body;

            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
    })

    describe('DELETE /rickandmorty/fav/:id', ()=>{
        const character1={
            id:827,
            name: 'Ricki'
        }

        const character2={
            id:828,
            name: 'Mortygan'
        }

        it('Devuelve el arreglo si no se elimina el personaje',async ()=>{
            let response= (await agent.delete('/rickandmorty/fav/50')).body
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })

        it('Elimina el personaje correctamente',async ()=>{
            let response= (await agent.delete('/rickandmorty/fav/828')).body
            expect(response).not.toContainEqual(character2)
        })
    })
})


