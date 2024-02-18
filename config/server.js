import express from 'express';
import http from 'http';
import morgan from 'morgan';
import router from '../routes/api.js';

const app = express();


export default class Server{
    constructor(){
        this.server = http.createServer(app);
        this.port = process.env.APP_PORT || 3000;
        this.host = process.env.APP_HOST || '127.0.0.1';
    }

    middleware(){
        app.use(morgan('dev'));
        app.use(express.json()); 
        app.use("/api", router);
    }

    start(){
   
        this.server.listen(this.port,this.host, () => {
            console.log(`🚀 Server started on http://${this.host}:${this.port}`);
        });
    }
}