const http = require('http')

const fs = require('fs')
const index = fs.readFileSync('index.html');
const pag2 = fs.readFileSync('pagina02.html');
const pag3 = fs.readFileSync('pagina03.html');
const pag4 = fs.readFileSync('pagina04.html');
const pag5 = fs.readFileSync('pagina05.html');

const server = http.createServer((request , response) =>{

    if(request.url === '/index'){
        return response.end(index)
    }else if(request.url === '/'){
        return response.end(index)
    }else if(request.url === '/pagina02'){
        return response.end(pag2)
    }else if(request.url === '/pagina03'){
        return response.end(pag3)
    }else if(request.url === '/pagina04'){
        return response.end(pag4)
    }else if(request.url === '/pagina05'){
        return response.end(pag5)
    }else{
        response.writeHead(404)
        response.end("pagina no programada")
    }
} ).listen(8080);