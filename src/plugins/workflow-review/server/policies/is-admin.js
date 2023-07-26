'use strict';

module.exports = async (policyContext, config, { strapi }) => {
    console.log(policyContext);
    if (policyContext.state.user.role.name === 'Administrator') {
        // Go to next policy or will reach the controller's action.
        console.log("lewat sini");
        return true;
    }

    return false;
};