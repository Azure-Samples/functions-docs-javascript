# Azure Functions JavaScript/TypeScript sample snippets repository

This repository contains JavaScript and TypeScript source code snippets used as `:::code` includes in [Azure Functions documentation](https://learn.microsoft.com/azure/azure-functions/). It is **not** intended as a standalone sample or project template.

## Contents

| Folder | Purpose |
|--------|---------|
| `src/` | Basic HTTP trigger functions (v4 model) |
| `functions-add-output-binding-storage-queue-cli-v4-programming-model/` | HTTP trigger + Storage Queue output (JavaScript, v4) |
| `functions-add-output-binding-storage-queue-cli-v4-programming-model-ts/` | HTTP trigger + Storage Queue output (TypeScript, v4) |
| `functions-add-output-binding-cosmosdb-cli-v4-programming-model/` | HTTP trigger + Cosmos DB output (JavaScript, v4) |
| `functions-add-output-binding-sql-cli-v4-programming-model/` | HTTP trigger + SQL output (JavaScript, v4) |
| `functions-typescript/` | TypeScript examples (v3 model, legacy) |
| `functions-add-output-binding-storage-queue-cli/` | Storage Queue output (v3 model, legacy) |

## Canonical scenario repositories

If you're looking for complete, deployable Azure Functions projects in JavaScript or TypeScript, use these `azd`-compatible templates instead:

**JavaScript:**
- [functions-quickstart-javascript-azd](https://github.com/Azure-Samples/functions-quickstart-javascript-azd) — HTTP trigger
- [functions-quickstart-javascript-azd-timer](https://github.com/Azure-Samples/functions-quickstart-javascript-azd-timer) — Timer trigger
- [functions-quickstart-javascript-azd-cosmosdb](https://github.com/Azure-Samples/functions-quickstart-javascript-azd-cosmosdb) — Azure Cosmos DB trigger
- [functions-quickstart-javascript-azd-eventhub](https://github.com/Azure-Samples/functions-quickstart-javascript-azd-eventhub) — Event Hubs trigger

**TypeScript:**
- [functions-quickstart-typescript-azd](https://github.com/Azure-Samples/functions-quickstart-typescript-azd) — HTTP trigger
- [functions-quickstart-typescript-azd-timer](https://github.com/Azure-Samples/functions-quickstart-typescript-azd-timer) — Timer trigger
- [functions-quickstart-typescript-azd-cosmosdb](https://github.com/Azure-Samples/functions-quickstart-typescript-azd-cosmosdb) — Azure Cosmos DB trigger
- [functions-quickstart-typescript-azd-eventhub](https://github.com/Azure-Samples/functions-quickstart-typescript-azd-eventhub) — Event Hubs trigger
