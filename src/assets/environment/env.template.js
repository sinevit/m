(function (window) {
    window.env = window.env || {};

    // Environment variables
    window['env']['GRAPHQL_URL'] = '${GRAPHQL_URL}';
    window['env']['API_URL'] = '${API_URL}';
    window['env']['GRAPHQL_SUBSCRIPT_URL'] = '${GRAPHQL_SUBSCRIPT_URL}';
    window['env']['DEV_NO_PERMISSIONS'] = '${DEV_NO_PERMISSIONS}';
    window['env']['LABELS'] = '${LABELS}';
})(this);
