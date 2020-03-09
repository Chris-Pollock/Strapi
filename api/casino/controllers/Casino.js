'use strict';

/**
 * Casino.js controller
 *
 * @description: A set of functions called "actions" for managing `Casino`.
 */

module.exports = {

  /**
   * Retrieve casino records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.casino.search(ctx.query);
    } else {
      return strapi.services.casino.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a casino record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.casino.fetch(ctx.params);
  },

  /**
   * Count casino records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.casino.count(ctx.query);
  },

  /**
   * Create a/an casino record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.casino.add(ctx.request.body);
  },

  /**
   * Update a/an casino record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.casino.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an casino record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.casino.remove(ctx.params);
  }
};
