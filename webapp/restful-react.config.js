module.exports = {
    prism: {
        output: 'src/apiClient/prismFetcher.tsx',
        file: '../openapi/openapi.json',
        customProps: {
            base: '"http://localhost:4003"'
        }
    },
    express: {
        output: 'src/apiClient/expressFetcher.tsx',
        file: '../openapi/openapi.json',
        customProps: {
            base: '"http://localhost:3001"'
        }
    }
};
