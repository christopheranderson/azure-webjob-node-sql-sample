var mssql = require('node-mssql');

mssql.connect(process.env['SQL_DB_CONNECTION_STRING']).then(function() {
    // Query
    new mssql.Request().query("select 'foobar'").then(function(recordset) {
        console.dir(recordset);
    }).catch(function(err) {
        console.log(err);
    });
}).catch(function(err) {
    console.log(err);
});