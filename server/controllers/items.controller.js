const axios = require('axios');
const modelsItems = require('../models/items');
const url = process.env.URL;
const region = process.env.REGION;
const limitItem = 4;

const getBySearch = async (req, res) => {
    try {
        const search = req.query.search;
        const apiUrl = `${url}${region}search?q=${search}&limit=${limitItem}`;

  
        axios.get(apiUrl)
            .then((response) => {
                const jsonItems = {};
                jsonItems.author = modelsItems.getAuthor();
                jsonItems.categories = modelsItems.getCategories(response.data.filters);
                jsonItems.items = modelsItems.getItems(response.data.results);

                //TODO Categorias con mayores resultados
                //const apiUrlCategories = `${url}categories/${response.data.results.category_id}`;
                // console.log(response.data.results);
                // // axios.get()
                // // .then((response) => {
                // //     jsonItems.categories = response.data.path_from_root.map(
                // //         (category) => {
                // //             return category.name;
                // //         });
                // //     res.json(jsonItems);
                // // });

                res.json(jsonItems);
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
