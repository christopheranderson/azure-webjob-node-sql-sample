var mssql = require('mssql');

console.log('Running SQL Query');

mssql.connect(process.env['SQLAZURECONNSTR_SQLDB'], function(err) {
    // ... error checks
    
    if(err) {
        console.log('Connection broke');
        return console.log(err);
    }

    var request = new mssql.Request();
    request.stream = true; // You can set streaming differently for each request
    request.query("select 'foobar' as result"); // or request.execute(procedure);

    request.on('recordset', function(columns) {
        // Emitted once for each recordset in a query
    });

    request.on('row', function(row) {
        // Emitted for each row in a recordset
        console.log(row);
    });

    request.on('error', function(err) {
        // May be emitted multiple times
        console.log('Query broke');
        console.log(err);
    });

    request.on('done', function(returnValue) {
        // Always emitted as the last one
        console.log('Completed Query');
        process.exit(0);
    });
});

mssql.on('error', function(err) {
    // ... error handler
    console.log('Could not connect to SQL DB');
    process.exit(1);
});

process.on('uncaughtException', function(err) {
    console.log('Unhandled Exception', err);
});

process.on('exit', function(code) {
  console.log('About to exit with code:', code);
});
