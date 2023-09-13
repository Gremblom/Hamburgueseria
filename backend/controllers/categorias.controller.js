import connection from "../database/connection.js";

// 6
const categories = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Categorias');

        const response = await collection.find().toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

// 17
const hasGourmetDesc = async (req, res)=>{
    try {
        const db = await connection();
        const collection = db.collection('Categorias');

        const response = await collection.find({descripcion : {$regex : /gourmet/}}).toArray();

        res.json(response);
    } catch (error) {
        console.log(error);
    }
}

export {
    categories,
    hasGourmetDesc
}