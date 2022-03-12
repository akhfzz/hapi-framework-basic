const hapi = require('@hapi/hapi');
const routing = require('./routes');

const init = async () => {
    const server = hapi.server({
        host: 'localhost',
        port: 5000
    })

    server.route(routing)

    await server.start()
    console.log(`Host berjalan pada URI ${server.info.uri}`);
}
init()