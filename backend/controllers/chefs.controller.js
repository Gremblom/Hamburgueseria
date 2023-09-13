import connection from "../database/connection.js";

// 3
const chefMeats = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Chefs');

        const response = await collection.find({especialidad : "Carnes"}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 10
const chngChfCInter = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Chefs');

        await collection.updateMany({nombre : "ChefC"}, {$set : {especialidad : "Cocina internacional"}});

        res.json(await collection.find({nombre : "ChefC"}).toArray());
    } catch (error) {
        console.log(error);
    }
}

// 16
const chefCount = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Chefs');

        const response = await collection.countDocuments();

        res.json({msg : `Hay ${response} chefs registrado(s)`});
    } catch (error) {
        console.log(error);
    }
}

// 19 
const insertChef = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Chefs');

        await collection.insertOne({
            "nombre" : "ChefD",
            "especialidad" : "Cocina Asiática"
        });

        res.json({
            msg : "Chef insertado",
            data : await collection.find().toArray()
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    chefMeats,
    chngChfCInter,
    chefCount,
    insertChef
}