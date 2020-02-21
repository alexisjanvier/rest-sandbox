module.exports = {
    prism: {
        output: 'webapp/src/apiClient/prismFetcher.tsx',
        file: 'openapi/openapi.json',
        customProps: {
            base: '"http://localhost:5002"'
        }
    },
    express: {
        output: 'webapp/src/apiClient/expressFetcher.tsx',
        file: 'openapi/openapi.json',
        customProps: {
            base: '"http://localhost:4999"'
        }
    }
};
