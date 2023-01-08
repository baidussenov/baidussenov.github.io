'use strict';

/**
 * api-filtering service
 */

const getEntries = async collectionTypes => {
    if (!Array.isArray(collectionTypes))
        throw 'collectionTypes has to be an array'

    let entries = {}
    for (const type of collectionTypes) {
        entries[type] = []
        try {
            // fetching data
            const typeEntries = await strapi.entityService.findMany(
                `api::${type}.${type}`,
                {
                    fields: [],
                    populate: ['default']
                }
            )

            entries[type].push(...typeEntries)

        } catch (err) { }
    }

    return entries
}

const getCategoryEntries = async categorySlug => {
    let entries = []
    try {
        const category = await strapi.entityService.findMany(
            `api::${categorySlug}.${categorySlug}`,
            { populate: ['default', 'filters'] }
        )
        const { productSlug } = category.default
        const categoryEntries = await strapi.entityService.findMany(
            `api::${productSlug}.${productSlug}`,
            { populate: ['default'] }
        )
        entries = categoryEntries
    } catch (err) { }

    return entries
}

module.exports = () => ({
    getEntries,
    getCategoryEntries
});
