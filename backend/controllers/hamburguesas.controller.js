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

// 23
const tomAndLett = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');
        
        const response = await collection.find({$or : [{ingredientes : "Tomate"}, {ingredientes : "Lechuga"}]}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 24
const add2AllGourm = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        await collection.updateMany({categoria : "Gourmet"}, {$inc : {precio : 2}});

        res.json(await collection.find({categoria : "Gourmet"}).toArray());
    } catch (error) {
        console.log(error);
    }
}

// 27
const expBurger = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find().sort({precio : -1}).limit(1).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 28
const addPcklsClss = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        await collection.updateMany({categoria : "Clásica"}, {$push : {ingredientes : "Pepinillos"}});

        res.json(await collection.find({categoria : "Clásica"}).toArray());
    } catch (error) {
        console.log(error);
    }
}

// 30
const burg7Ing = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.find({ingredientes : {$size : 7}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 31
const gourmExpChef = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = collection.find({}, {$group : {_id : "$chef"}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 32
const countIng = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Hamburguesas');

        const response = await collection.aggregate([
            { $unwind: '$ingredientes' },
            { $group: { _id: '$ingredientes', count: { $sum: 1 } } }
        ]).toArray();
        res.json(response);
        client.close();
    } catch (error) {
        res.status(404).json({message: error.message});
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
    listBurgAsc,
    tomAndLett,
    add2AllGourm,
    expBurger,
    addPcklsClss,
    burg7Ing,
    gourmExpChef,
    countIng
}