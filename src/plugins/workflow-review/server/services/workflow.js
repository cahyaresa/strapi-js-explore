'use strict';

const _ = require('lodash');


// @ts-ignore
const workflowContent = require("../components/workflow.json");
// @ts-ignore
const commentReviewContent = require("../components/comment-review.json");

module.exports = ({ strapi }) => ({
    getWorkflowComponent() {
        const workflowComponent = strapi.components['shared.workflow'];
        return workflowComponent
            ? { attributes: workflowComponent.atrributes, category: workflowComponent.category }
            : null;
    },
    getContentTypes() {
        const contentTypes = strapi.contentTypes;
        const keys = Object.keys(contentTypes);
        let collectionTypes = [];
        let singleTypes = [];

        keys.forEach((name) => {
            const hasWorkflowComponent = _.get(
                contentTypes[name],
                'attribute.workflow.component',
                null
            )

            if (name.includes('api::')) {
                const object = {
                    workflow: hasWorkflowComponent ? true : false,
                    uid: contentTypes[name].uid,
                    kind: contentTypes[name].kind,
                    globalId: contentTypes[name].globalId,
                    atrribute: contentTypes[name].attributes,
                };
                contentTypes[name].kind === 'collectionType'
                    ? collectionTypes.push(object)
                    : singleTypes.push(object)
            }
        });

        return { collectionTypes, singleTypes } || null;
    },

    async createWorkflowComponent() {
        const workflowComponent = await this.getWorkflowComponent();

        if (!workflowComponent) {
            if (commentReviewContent && workflowContent) {
                try {
                    const res = await strapi
                        .plugin('content-type-builder')
                        .services.component.createComponent({
                            component: {
                                category: 'shared',
                                displayName: workflowContent.info.displayName,
                                icon: workflowContent.info.icon,
                                attributes: workflowContent.attributes,
                            },
                            components: [
                                {
                                    tmpUID: 'shared.comment-review',
                                    category: 'shared',
                                    displayName: commentReviewContent.info.displayName,
                                    icon: commentReviewContent.info.icon,
                                    attributes: commentReviewContent.attributes,
                                },
                            ],
                        });
                    return res;
                } catch (error) {
                    console.log(error)
                }
            } else {
                return null;
            }
        }
    },
});
