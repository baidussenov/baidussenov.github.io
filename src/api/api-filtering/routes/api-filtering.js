module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/api-filtering/getEntries',
            handler: 'api-filtering.getEntries',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/api-filtering/getCategoryEntries',
            handler: 'api-filtering.getCategoryEntries',
        },
    ],
};
