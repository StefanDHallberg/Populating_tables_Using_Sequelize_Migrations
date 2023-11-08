Populating tables Using Sequelize Migrations / dummies.
=======================================================
# TO RUN:
## Root terminal commands:
```
### 1) sequelize-cli db:seed:all
## After seeding is finished. Run:
### 2) npm start
```
### you can run the server.js in the root folder.

To edit seeders: /seeders/ 20231108161941-add-dummy-users.js if you want to change the dummy data / amount.

To run this project, you need to have node.js installed on your computer.
You also need to have a database installed, I used MySQL Workbench.
You need to create a database.

### You need to run the following commands in the terminal, in the root of the project:
```
sequelize-cli init
:: To initialize sequelize and create config, models, migrations, seeders folders.

sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
:: To create a User model with firstName, lastName and email attributes.
:: This will create a model-file and a migration-file for the db.

sequelize-cli db:migrate
:: To run all pending migrationsand create db tables.


sequelize-cli seed:generate --name demo-user
:: To create a seed file for the db, for dummy data.

sequelize-cli db:seed:all
:: To run all seed files and populate the db with dummy data.

npm install express
:: To install the express node module, smaller and simplified version of the http module / springboot.
```





