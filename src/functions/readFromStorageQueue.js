const { app } = require('@azure/functions');

app.storageQueue('storageQueueTrigger', {
  queueName: 'messages',
  connection: 'AzureWebJobsStorage',
  handler: (queueItem, context) => {
    context.log('Storage queue function processed work item:', queueItem);
  },
});
