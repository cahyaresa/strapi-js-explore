'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },

  async getAllArticle() {
    const allArticle = await strapi
      .query("api::article.article")
      .findMany();
    return allArticle;
  }
});
