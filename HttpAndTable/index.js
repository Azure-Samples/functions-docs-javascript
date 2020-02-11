module.exports = async function (context, req, product) {

    if(product) {
        context.res = {
            status: 200,
            body: `ID: ${product.RowKey}, Name: ${product.name}`
        };
    } else {
        context.res = {
          status: 400,
          body: `There is no data for ID: ${context.bindingData.id}`
        };
    }
};
