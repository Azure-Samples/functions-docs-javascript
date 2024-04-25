import {
  app,
  output,
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
  StorageQueueOutput,
} from '@azure/functions';

const sendToQueue: StorageQueueOutput = output.storageQueue({
  queueName: 'outqueue',
  connection: 'AzureWebJobsStorage',
});

export async function HttpExample(
  request: HttpRequest,
  context: InvocationContext,
): Promise<HttpResponseInit> {
  try {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || (await request.text());
    context.log(`Name: ${name}`);

    if (name) {
      const msg = `Name passed to the function ${name}`;
      context.extraOutputs.set(sendToQueue, [msg]);
      return { body: msg };
    } else {
      context.log('Missing required data');
      return { status: 404, body: 'Missing required data' };
    }
  } catch (error) {
    context.log(`Error: ${error}`);
    return { status: 500, body: 'Internal Server Error' };
  }
}

app.http('HttpExample', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: HttpExample,
});
