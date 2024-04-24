const { app, output } = require('@azure/functions');

const sendToCosmosDb = output.cosmosDB({
    databaseName: 'my-database',
    containerName: 'my-container',
    createIfNotExists: false,
    connection: 'CosmosDBConnectionString'

});

app.http('HttpExampleToCosmosDB', {
    methods: ['GET', 'POST'],
    extraOutputs: [sendToCosmosDb],
    handler: async (request, context) => {
        try {

            context.log(`Http function processed request for url "${request.url}"`);

            const name = request.query.get('name') || await request.text();

            if (!name) {
                return { status: 404, body: 'Missing required data' };
            }

            // Output to Database
            context.extraOutputs.set(sendToCosmosDb,
                {
                // create a random ID
                id: new Date().toISOString() + Math.random().toString().substring(2, 10),
                name: name
            });

            const responseMessage = name
                ? "Hello, " + name + ". This HTTP triggered function executed successfully."
                : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

            // Return to HTTP client
            return { body: responseMessage };


        } catch (error) {
            context.log(`Error: ${error}`);
            return { status: 500, body: 'Internal Server Error' };
        }



    }
});
