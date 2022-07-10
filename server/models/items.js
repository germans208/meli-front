const models = {

    getAuthor: () => {
        return {
            name: process.env.AUTHOR_NAME,
            lastname: process.env.AUTHOR_LAST_NAME,
        }
    },

    getCategories: (filters) => {
        return filters.length === 0 ? [] : Object.values(filters[0].values[0].path_from_root).map(e => e.name);
    },

    getItems: (results) => {
        return results.map((item) => {
            return {
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: '10',
                },
                picture: item.thumbnail,
                condition: item.condition,
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
                decimals: '10',
            },
            picture: item.thumbnail,
            condition: item.condition === 'new' ? 'NUEVO' : 'USADO',
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