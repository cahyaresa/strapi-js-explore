module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/all-article',
    handler: 'myController.getAllArticle',
    config: {
      polices: [],
      auth: false
    }
  }
];
