const { TableServiceClient, TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");
const { v4 } = require("uuid");

const dotenv = require("dotenv");
dotenv.config();

const entity1 = {
    partitionKey: "car",
    rowKey: v4(),
    name: "Toyota",
    color: "blue",
};

const entity2 = {
    partitionKey: "car",
    rowKey: v4(),
    name: "BMW",
    color: "black",
};

const entity3 = {
    partitionKey: "car",
    rowKey: v4(),
    name: "Mercedes",
    color: "red",
};


async function main() {

    const account = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;

    const credential = new AzureNamedKeyCredential(account, accountKey);
    const serviceClient = new TableServiceClient(
      `https://${account}.table.core.windows.net`,
      credential
    );
    const tableName = "product";
    await serviceClient.createTable(tableName);
    console.log("Created table", tableName)

    const tableClient = new TableClient(`https://${account}.table.core.windows.net`, tableName, credential);

    await tableClient.createEntity(entity1);
    await tableClient.createEntity(entity2);
    await tableClient.createEntity(entity3);
}

main()
    .then(() => {
        console.log("Successfully created table and entities");
    }).catch((err) => {
        console.error("The sample encountered an error:", err);
    });
