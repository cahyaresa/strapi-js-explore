'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },



  async getAllArticle() {
    const allArticle = await strapi
      .query("api::article.article")
      .findMany({
        populate: {
          branch: "*",
          employee: {
            populate: {
              reviewer: {
                populate: {
                  user_admin: true
                }
              }
            }
          },
        },
        // where: {
        //   employee: { id: 1 }
        // }
      });
    return allArticle;
  }
});
