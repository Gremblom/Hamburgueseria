import express from "express";

import ingredientesRouter from "../routes/ingredientes.router.js";
import hamburguesasRouter from "../routes/hamburguesas.router.js";
import chefsRouter from "../routes/chefs.router.js";
import categoriasRouter from "../routes/categorias.router.js";

class Server {
    constructor(){
        this.app = express();

        this.port = process.env.PORT;

        this.rutas = {
            ingredientes : "/ingredients",
            hamburguesas : "/burgers",
            chefs : "/chefs",
            categorias : "/categories"
        } 

        this.middlewares();

        this.routes();
    }

    listener(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running in port ${this.port}`);
        });
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.rutas.ingredientes, ingredientesRouter);
        this.app.use(this.rutas.hamburguesas, hamburguesasRouter);
        this.app.use(this.rutas.chefs, chefsRouter);
        this.app.use(this.rutas.categorias, categoriasRouter);
    }
}

export default Server;