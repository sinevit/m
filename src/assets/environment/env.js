(function (window) {
  window.env = window.env || {};

  // Environment variables
  window.env.GRAPHQL_URL = 'https://graphqlplaceholder.vercel.app/graphql';
  window.env.GRAPHQL_SUBSCRIPT_URL = 'wss://graphqlplaceholder.vercel.app/sub/';
  window.env.API_URL = 'http://localhost:8080';
  window.env.DEV_NO_PERMISSIONS = 'false';
  window.env.LABELS = '';
}(this));
