const axios = require('axios');
const modelsItems = require('../models/items');
const url = process.env.URL;
const region = process.env.REGION;
const limitItem = 4;


const getBySearch = async (req, res) => {
    try {
        //const search = req.query.search;
        const search = "apple"
        const apiUrl = `${url}${region}search?q=${search}&limit=${limitItem}`;
        axios.get(apiUrl)
            .then((response) => {

                //TODO CATEGORIAS 
                const jsonItems = {};
                jsonItems.author = modelsItems.getAuthor();
                jsonItems.categories = modelsItems.getCategories(response.data.filters);
                jsonItems.items = modelsItems.getItems(response.data.results);
                res.json(jsonItems)
            })
            .catch((err) => {
                res.send(err);
            });
    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    getBySearch
}
