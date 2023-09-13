import connection from "../database/connection.js";

const db = await connection();
const collection = db.collection('Hamburguesas');

// 2
const veganBurger = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({categoria : "Vegetariana"}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 5
const burgerChefB = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({chef : "ChefA"}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 8
const addClassIng = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        await collection.updateOne({nombre : "Clásica"}, {$push : {ingredientes : "Arepa"}});

        res.json(await collection.find({nombre : "Clásica"}).toArray());
    } catch (error) {
        console.log(error);
    }
}

// 9
const intBreadBurg = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({ingredientes : "Pan integral"}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 12
const notCheeseBurg = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({ingredientes : {$ne : "Queso cheddar"}}).toArray();

        res.json(response);
    } catch (error) {
        
    }
}

// 15
const lessOrEq9 = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({precio : {$lte : 9}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 18
const delLess5Ing = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.deleteMany({$expr : {$lt : [{$size : "$ingredientes"}, 5]}});

        let msg;

        if (response.deletedCount > 0){
            msg = "Hamburguesas borradas, estas son las hamburguesas que quedan"
        } else {
            msg = "No se borró ninguna hamburguesa"
        }

        res.json({
            msg,
            data : await collection.find({}).toArray()
        });
    } catch (error) {
        
    }
}

// 20
const listBurgAsc = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find().sort({precio : 1}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export {
    veganBurger,
    burgerChefB,
    addClassIng,
    intBreadBurg,
    notCheeseBurg,
    lessOrEq9,
    delLess5Ing,
    listBurgAsc
}