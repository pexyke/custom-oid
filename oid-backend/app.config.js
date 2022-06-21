const config = {
    auth: {
      google: {
        clientId:
          process.env.GOOGLE_CLIENT_ID || "478199465159-ns9ovsh5q509sa04vdg4bd0if1gnlll1.apps.googleusercontent.com",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
        redirectUri: process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/callback",
        tokenEndpoint: "https://oauth2.googleapis.com/token",
        scope: "openid",
      },
      github: {
        clientId: process.env.GITHUB_CLIENT_ID || "25c0736509431eb6980c",
        clientSecret: process.env.GITHUB_CLIENT_SECRET || "acaef2ee835f51ae03a3c85c8a7c3b8917d2e093",
        redirectUri: process.env.GITHUB_REDIRECT_URI || "http://localhost:3000/callback/github",
        tokenEndpoint: "https://github.com/login/oauth/access_token",
        scope: "user",
        userEndpoint: "https://api.github.com/user", // need this if provider is OAuth compatible only
        user_id: "id",
      },
    },
  };
  
  module.exports = config;