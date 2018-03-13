module.exports = {
  port: process.env.NODE_PORT || process.env.PORT || 80,

  privateAccess: false,

  scanInterval: 1000 * 60 * 60, // 1 hour,
  scanOnServerStart: true,
  scanPersistentDriver: 'mongodb',

  github: {
    user: process.env.GITHUB_USER,
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    personalAccessToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  },

  mongodb: {
    url: process.env.MONGODB_URL,
    collection: process.env.MONGODB_COLLECTION
  }
};
