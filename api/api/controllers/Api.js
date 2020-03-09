'use strict';

/**
 * Api.js controller
 *
 * @description: A set of functions called "actions" for managing `Api`.
 */

module.exports = {

  /**
   * Retrieve api records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.api.search(ctx.query);
    } else {
      return strapi.services.api.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a api record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.api.fetch(ctx.params);
  },

  /**
   * Count api records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.api.count(ctx.query);
  },

  /**
   * Create a/an api record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.api.add(ctx.request.body);
  },

  /**
   * Update a/an api record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.api.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an api record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.api.remove(ctx.params);
  }
};
