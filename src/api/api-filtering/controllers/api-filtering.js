'use strict';

/**
 * A set of functions called "actions" for `api-filtering`
 */

const unparsed = require('koa-body/unparsed.js')

const getEntries = async (ctx, next) => {
    try {
        console.log(1)
        // recieves an array of singular slugs (colectionTypes)
        // associated with product collection types
        // and returns all their corresponding entries
        const { collectionTypes } = JSON.parse(ctx.request.body[unparsed])

        const data = await strapi
            .service('api::api-filtering.api-filtering')
            .getEntries(collectionTypes)

        console.log(2)

        ctx.body = data
    } catch (err) {
        ctx.badRequest('Post report controller error', { moreDetails: err })
    }
}

const getCategoryEntries = async (ctx, next) => {
    try {
        // recieves a single type category slug 
        // and returns all the entries
        // associated with it
        const { categorySlug } = JSON.parse(ctx.request.body[unparsed])

        console.log('heyyyy')

        const data = await strapi
            .service('api::api-filtering.api-filtering')
            .getCategoryEntries(categorySlug)

        ctx.body = data
    } catch (err) {
        ctx.badRequest('Post report controller error', { moreDetails: err })
    }
}

module.exports = {
    getEntries,
    getCategoryEntries
};
