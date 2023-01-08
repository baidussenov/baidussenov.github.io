'use strict';

/**
 * cash-box service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cash-box.cash-box');
