const menghitungRata2 = require('./task')

const routing = [
    {
        method: 'GET',
        path: '/result',
        handler: (req, res) => {
            const nilai = [70, 30, 60, 50, 80,90]
            return res.response(menghitungRata2(nilai)).code(200);
        }
    },
    {
        method: '*',
        path: '/',
        handler: (req, res) => {
            return 'halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return 'homepage'
        }
    },
    //path parameter
    {
        method: 'GET',
        path: '/{username}',
        handler: (req, res) => {
            const {username} = req.params;
            return `Halo, ${username}!`;
        }
    },
    {
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, response) => {
            //const { username } = request.params; //undefined
            const { username = 'izal' } = request.params; 
            const { nim } = request.query;   
            if(nim){
                return `hai, ${username}`;
            }
            return `Hello, ${username}!`;
        }
    },
    //path query
    {
        method: 'GET',
        path: '/query',
        handler: (request, response) => {
            const {nama, prodi} = request.query;
            return `Halo, ${nama}! kamu dari ${prodi} ya`;
        }
    },
    {
        method:'GET',
        path: '/about',
        handler: (req, res) => {
            return 'About page'
        }
    },
    {
        method: '*',
        path: '/about',
        handler: (req, res) => {
            return 'halaman tidak dapat diakses dengan method tersebut'
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (req, res) => {
            return res.response('halaman tidak dapat diakses dengan method tersebut').code(404)
        }
    }

]

module.exports = routing