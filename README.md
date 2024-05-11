---
name: Azure Functions binding examples in JavaScript
description: Azure Functions examples using single and multi bindings. 
languages:
- javascript
products:
- azure
- azure-sql-database
- azure-cosmos-db
- azure-storage
- azure-functions
page_type: sample
urlFragment: functions-docs-javascript
---

# Azure Functions binding examples in JavaScript

The following samples are used as a basis for [Azure Functions 2.x+ binding](https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings#supported-bindings) examples in JavaScript.

## Settings and configuration

The *local.settings.example.json* file is provided for your convenience. Rename the file to *local.settings.json* and add your own connection and API values before trying to run the examples in this repo.

If you're using Visual Studio Code, you can use the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension with the *routes.http* file. This file gives you the ability to call sample functions with a single click inside VS Code.

## Samples

The following samples are available in this repo.

| Name | Description  | Trigger | Input | Output |
|------|--------------|---------|-------|--------|
| [HttpTrigger](src/functions/httpTrigger.js) | Triggered by an HTTP request. | Http | N/A | Http |
| [HttpTriggerRoute](src/functions/httpTriggerRoute.js) | Triggered by an HTTP request, writes a queue message. | Http | N/A | Queue |
| [HttpAndTable](src/functions/httpReadFromTable.js) | Triggered by an HTTP request, writes a queue message. | Http | Table | Http |
| [QueueTrigger](src/functions/readFromStorageQueue.js) | Reads a queue message | Queue | Queue | N/A |

## Samples with extra outputs

Extra outputs are a way to process incoming HTTP information into more an Azure service without having to write code to use the Azure client library for that SDK. 

The following samples are available in this repo.

| Name | Description  | Trigger | Input | Output |
|------|--------------|---------|-------|--------|
| [Azure Sql](functions-add-output-binding-sql-cli-v4-programming-model)| Triggered by an HTTP request, writes to Azure Sql Table. [Documentation](/azure/azure-functions/functions-add-output-binding-azure-sql-vs-code?pivots=programming-language-javascript)| Http | Http | Azure Sql + HTTP |
| [Cosmos DB](functions-add-output-binding-cosmosdb-cli-v4-programming-model) | Triggered by an HTTP request, writes a Cosmos DB container. [Documentation](/azure/azure-functions/functions-add-output-binding-azure-sql-vs-code?pivots=programming-language-javascript)| Http | Http | Cosmos DB + HTTP |
| [Storage Queue](functions-add-output-binding-storage-queue-cli-v4-programming-model) | Triggered by an HTTP request, writes a Storage queue message. [Documentation](/azure/azure-functions/functions-add-output-binding-storage-queue-vs-code?pivots=programming-language-javascript&tabs=isolated-process) | Http | HTTP | Storage Queue + HTTP |
