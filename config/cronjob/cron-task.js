module.exports = {
    '*/1 * * * *': {
        task: async() => {
            console.log("Running Cronjob");
            const articleToBePublished = await strapi.db.query('api::article.article').findMany({
                where: {
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
                    {data: {publishedAt: new Date()}}
                )
            }))
        },
        options: {
            tz: 'Asia/Jakarta',
        }
    }
}