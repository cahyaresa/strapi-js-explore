module.exports = {
    publishArticle: {
        task: async () => {
            const articleToBePublished = await strapi.db.query('api::article.article').findMany({
                where: {
                    activeArticle: true,
                    publishedAt: {
                        $null: true
                    },
                    planToPublishAt: {
                        $lt: new Date()
                    }
                }
            })

            await Promise.all(articleToBePublished.map((article) => {
                return strapi.service('api::article.article').update(
                    article.id,
                    {
                        data:
                        {
                            publishedAt: new Date()
                        },
                    }
                )
            }))
        },
        options: {
            rule: '*/1 * * * *',
            tz: 'Asia/Jakarta',
        }
    },

    unPublishArticle: {
        task: async ({ strapi }) => {
            const articleToBeUnpublished = await strapi.db.query('api::article.article').findMany({
                where: {
                    publishedAt: {
                        $null: false,
                    },
                    planToUnpublishedAt: {
                        $lt: new Date(),
                    }
                }
            })

            await Promise.all(articleToBeUnpublished.map((article) => {
                return strapi.db.query('api::article.article').update({
                    where: { id: article.id },
                    data: {
                        publishedAt: null,
                        activeArticle: false
                    },
                });
            }))
        },
        options: {
            rule: '*/1 * * * *',
            tz: 'Asia/Jakarta',
        }
    }


}