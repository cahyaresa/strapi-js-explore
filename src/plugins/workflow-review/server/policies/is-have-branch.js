'use strict';

/**
 * `is-have-branch` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.
    strapi.log.info('In is-have-branch policy.');

    const canDoSomething = true;

    if (canDoSomething) {
      return true;
    }

    return false;
};
