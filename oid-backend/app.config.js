const config = {
    auth: {
      google: {
        clientId:
          process.env.GOOGLE_CLIENT_ID || "651816047225-1us03r4vchvce7h51t0c49f4u0ip7ubm.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
        redirectUri: process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/callback",
        tokenEndpoint: "https://oauth2.googleapis.com/token",
        scope: "openid",
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID || "a6b3d8e1c2c6c193dac2",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "7c566a9529bc9ef3dee18af40e183ec31e768291",
        redirectUri: process.env.GITHUB_REDIRECT_URI || "http://localhost:3000/callback/github",
        tokenEndpoint: "https://github.com/login/oauth/access_token",
        scope: "user",
        userEndpoint: "https://api.github.com/user", // need this if provider is OAuth compatible only
        user_id: "id",
      },
    },
  };
  
  module.exports = config;