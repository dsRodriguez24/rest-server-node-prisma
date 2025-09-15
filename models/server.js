const express          = require("express");
const cors             = require("cors");
const { router_user }  = require("../routes"); 


class Server {
    
    constructor(){
        this.app         = express();
        this.server_port = 3000;
        this.base_dir    = '/api/v1';

        this.middlewares();
        this.routes();
    }


    routes(){
        this.app.use(this.base_dir , router_user )
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    init(){
        this.app.listen(this.server_port, () => {
            console.log(`[SERVER] Running on port ${this.server_port}`);
        })
    }
}

module.exports = {
    Server
}