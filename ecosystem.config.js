module.exports = {
    apps : [{
      name   : "iphone-15-preorder",
      script : "./server.js",
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
}