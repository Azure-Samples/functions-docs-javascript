const { app, output } = require('@azure/functions');

const sendToQueue = output.storageQueue({
  queueName: 'outqueue',
  connection: 'AzureWebJobsStorage',
});

app.http('httpExample', {
  methods: ['GET', 'POST'],
  extraOutputs: [sendToQueue],
  authLevel: 'anonymous',
  handler: async (request, context) => {
    try {
      context.log(`Http function processed request for url "${request.url}"`);

      const name = request.query.get('name') || (await request.text());
      if (name) {
        const msg = `Name passed to the function ${name}`;
        context.extraOutputs.set(sendToQueue, [msg]);
        return { body: msg };
      } else {
        return { status: 404, body: 'Missing required data' };
      }
    } catch (error) {
      context.log(`Error: ${error}`);
      return { status: 500, body: 'Internal Server Error' };
    }
  },
});
