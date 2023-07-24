'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('workflow-review')
      .service('myService')
      .getWelcomeMessage();
  },

  async getAllArticle(ctx) {
    ctx.body = await strapi
      .plugin("workflow-review")
      .service("myService")
      .getAllArticle();
  }
});
