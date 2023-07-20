'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {

    const conditions = [
      {
        displayName: 'Have same branch with user',
        name: 'same-branch-with-user',
        async handler(user) {
          const entries = await strapi.entityService.findMany('api::reviewer.reviewer', {
            populate: ['user_admin', 'employees', 'branch'],
            filters: {
              user_admin: { id: user.id }
            }
          });

          // console.log("entryS", entries.map((entry) => entry.branch.id));
          console.log("user", user);
          return {
            "branch.id" : {
              $in: entries.map((entry) => entry.branch.id)
            }
          }

            // return user.email.includes(".com")
        }
      }
    ] 
    await strapi.admin.services.permission.conditionProvider.registerMany(conditions);
  },
};
