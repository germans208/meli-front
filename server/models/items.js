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
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                address: item.address.state_name
            };
        })
    },

}

module.exports = models;