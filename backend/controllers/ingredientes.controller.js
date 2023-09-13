import connection from "../database/connection.js";

// 1
const less400 = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        const response = await collection.find({stock : {$lt : 400}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 4
const multiply15 = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        await collection.updateMany({}, {$mul : {precio : 1.5}});

        res.json(await collection.find().toArray());
    } catch (error) {
        console.log(error);
    }
}

// 7
const delIng0 = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        const response = await collection.deleteMany({stock : 0});

        let msg;

        if (response.deletedCount > 0){
            msg = "Ingredientes borrados, estos son los ingredientes que quedan"
        } else {
            msg = "No se borró ningun ingrediente"
        }

        res.json({
            msg,
            data : await collection.find().toArray()
        });
    } catch (error) {
        console.log(error);
    }
}

// 11
const maxIng = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        const response = await collection.find().sort({precio : 1}).toArray();

        res.json(response[response.length - 1]);
    } catch (error) {
        console.log(error);
    }
}

// 13
const incBrd100 = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        await collection.updateOne({nombre : "Pan"}, {$inc : {stock : 100}});

        res.json(await collection.find({nombre : "Pan"}).toArray());
    } catch (error) {
        console.log(error);
    }
}

// 14
const hasClassic = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        const response = await collection.find({descripcion : {$regex : /clásico/}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 21 
const priceRange = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Ingredientes');

        const response = await collection.find({precio : {$gte : 2, $lte : 5}}).toArray();

        res.json(response);
    } catch (error) {
        console.log();
    }
}

export {
    less400,
    multiply15,
    delIng0,
    maxIng,
    incBrd100,
    hasClassic,
    priceRange
}