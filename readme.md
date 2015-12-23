# Sample: Azure WebJobs Node w/ SQL Server 

A simple example of accessing a SQL Server from Node on Azure WebApps

## What it does

This connects to a SQL DB in an ADO.NET connection string named `SQLAZURECONNSTR_SQLDB` and runs `SELECT 'foobar'`, then prints the result to stdout.
It runs every minute, thanks to the schedule setting in the settings.job. This only works in Standard with Always On turned on. If you need CRON Jobs outside of Standard tier, use Azure Scheduler.

## How to deploy

There are many ways to deploy a WebJob: this one is simple, but manual.
1. Clone repo
2. Run npm install
3. zip up all contents of folder
4. On a new or existing App Service App (Web, Mobile, API), set the `SQLDB` as a Connection String (`SQLAZURECONNSTR` is prepended to SQL Connection Strings; you can also use `SQLAZURECONNSTR_SQLDB` as an App Setting)
4. Deploy via the portal as On Demand (Triggered) job to the same App Service App.

Once you've finished, you can click on the logs link in the portal or go to `{sitename}.scm.azurewebsites.net/AzureJobs` to see the results.

## Important Notes

The connection timeout in the ADO.NET Connection String is interpretted in milliseconds by the mssql driver.

This uses the Tedious driver by default, which is a pure JS driver. This means it will run without native compilation, but is theoretically less performant than a native driver.

## License

[MIT](LICENSE)