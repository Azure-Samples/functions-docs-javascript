const { app } = require('@azure/functions');

app.http('httpTriggerRoute', {
    route: 'people/{name}',
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        
        try{
            context.log(`Http function processed request for url "${request.url}"`);

            const name = request.params.name;
            console.log(`Name: ${name}`);

            if (!name) {
                return { status: 404, body: 'Not Found' };
            }
    
            return { body: `Hello, ${name}!` };
        } catch(error) {
            context.log(`Error: ${error}`);
            return { status: 500, body: 'Internal Server Error' };
        }

    }
});