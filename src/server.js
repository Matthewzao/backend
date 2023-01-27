import http from 'http'


const users = []
const server = http.createServer((request, response) => {

    const metodo = request.method
    const url = request.url

    if (metodo === 'GET' && url === '/users') {
        return response
            .setHeader('Content-type', 'application/json') /* setando que a informação seja em json*/
            .end(JSON.stringify(users))
    }

    if (metodo === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Matthew Doe',
            email: 'matthew@exemple.com'
        })
    }

    if (metodo === 'PUT' && url === '/users') {
        return response.end('Atualização de usuários')
    }

    return response.writeHead(404).end('NAO ENCONTRADO')  /* MENSAGEM DE ERRO QUANDO A ROTA NAO É ENCONTRADA*/
})


server.listen(3333)