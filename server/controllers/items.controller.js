const axios = require('axios');
const { json } = require('body-parser');
const modelsItems = require('../models/items');
const url = process.env.URL;
const region = process.env.REGION;
const limitItem = 4;

function getCategoriesById(category_id) {
    return axios.get(`${url}categories/${category_id}`);
}
/**
Obtengo la maxima cantidad de resultados total_items_in_this_category, para poner la categorias
 */
async function getMaxCategory(ids) {
    const allCategories = await Promise.all(ids.map(id => getCategoriesById(id)));

    const objects = ids.map((e, i) => { return modelsItems.getCategories(allCategories[i].data) })
    const maxResults = Math.max(...objects.map(e => e.total_items_in_this_category));
    const category = objects.find(e => e.total_items_in_this_category === maxResults);

    return category;
}

const getBySearch = async (req, res) => {
    try {
        const search = req.query.search;
        const apiUrl = `${url}${region}search?q=${search}&limit=${limitItem}`;

        axios.get(apiUrl)
            .then((response) => {

                const ids = modelsItems.getCategoryId(response.data.results);

                getMaxCategory(ids).then((data) => {
                    const jsonItems = {};
                    jsonItems.author = modelsItems.getAuthor();
                    //jsonItems.categories = modelsItems.getCategories(response.data.filters);
                    jsonItems.categories = data.path_from_root.map(e => e.name);
                    jsonItems.items = modelsItems.getItems(response.data.results);

                    res.json(jsonItems);
                });
            })
            .catch((error) => {
                res.send(error);
            });
    } catch (error) {
        return res.status(404).json(error);
    }
}


const getItemById = async (req, res) => {
    try {
        const itemId = req.params.id;
        const apiUrl = `${url}items/${itemId}`;

        const promiseItem = axios.get(apiUrl);
        const promiseDescription = axios.get(`${apiUrl}/description`);

        Promise.all([promiseItem, promiseDescription])
            .then((response) => {
                const item = response[0].data;
                const description = response[1].data;
                const jsonItemDetails = {};
                jsonItemDetails.author = modelsItems.getAuthor();
                jsonItemDetails.item = { ...modelsItems.getItemDetails(item), ...modelsItems.getItemDescription(description) };

                axios.get(`${url}categories/${item.category_id}`)
                    .then((response) => {
                        jsonItemDetails.categories = response.data.path_from_root.map(
                            (category) => {
                                return category.name;
                            });
                        res.json(jsonItemDetails);
                    });
            })
            .catch((error) => {
                res.send(error);
            });
    } catch (error) {
        return res.status(404).json(error);
    }
}

module.exports = {
    getBySearch,
    getItemById
}
