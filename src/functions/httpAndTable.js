const { app, input } = require('@azure/functions');

const tableInput = input.generic({
    type: 'table',
    partitionKey: 'car',
    tableName: 'product',
    rowKey: '{id}',
});

app.http('httpAndTable', {
    methods: ['GET'],
    connection: 'AzureWebJobsStorage',
    route: "products/{id}",
    extraInputs: [tableInput],
    handler: (request, context) => {

        try {

            context.log(`id: ${request.params.id}`);

            const product = context.extraInputs.get(tableInput);
            context.log(`Product: ${JSON.stringify(product)}`);

            if (product) {
                return {
                    status: 200,
                    jsonBody:product
                };
            } else {
                return {
                    status: 400,
                    body: `There is no data for ID: ${id}`
                };
            }
        } catch (err) {
            context.log(`Error: ${err}`);
            return {
                status: 500,
                body: 'Internal Server Error'
            }
        }
    }
});
