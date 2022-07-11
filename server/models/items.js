const models = {

    getAuthor: () => {
        return {
            name: process.env.AUTHOR_NAME,
            lastname: process.env.AUTHOR_LAST_NAME,
        }
    },

    // getCategories: (filters) => {
    //     return filters.length === 0 ? [] : Object.values(filters[0].values[0].path_from_root).map(e => e.name);
    // },

    getCategoryId: (results) => {
        return results.map((item) => item.category_id)
    },

    getCategories: (results) => {
        return {
            id: results.id,
            path_from_root: results.path_from_root,
            total_items_in_this_category: results.total_items_in_this_category
        };
    },

    getItems: (results) => {
        return results.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: "00", //TODO NO LO ENCUENTRO
                },
                picture: item.thumbnail,
                condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
                free_shipping: item.shipping.free_shipping,
            };
        })
    },

    getItemDetails: (item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: "00", //TODO NO LO ENCUENTRO
            },
            picture: item.pictures.length !== 0 ? item.pictures[0].url : item.thumbnail,
            condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
        };
    },

    getItemDescription: (description) => {
        return {
            description: description.plain_text
        };
    },
}

module.exports = models;