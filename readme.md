# Sample: Azure WebJobs Node w/ SQL Server 

A simple example of accessing a SQL Server from Node on Azure WebApps

## What it does

This connects to a SQL DB in a connection string named `SQL_DB_CONNECTION_STRING` and runs `SELECT 'foobar'`, then prints the result to stdout.
It runs every minute, thanks to the schedule setting in the settings.json. This only works in Standard with Always On turned on. If you need CRON Jobs outside of Standard tier, use Azure Scheduler.

## How to deploy

There are many ways to deploy a WebJob: this one is simple, but manual.
1. Clone repo
2. Run npm install
3. zip up all contents of folder
4. Deploy via the portal as On Demand (Triggered) job

## Important Notes

The connection timeout in the ADO.NET Connection String is interpretted in milliseconds by the mssql driver.

This uses the Tedious driver by default, which is a pure JS driver. This means it will run without native compilation, but is theoretically less performant than a native driver.

## License

[MIT](LICENSE)