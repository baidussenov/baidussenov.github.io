'use strict';

/**
 * monoblock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monoblock.monoblock');
