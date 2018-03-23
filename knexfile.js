module.exports = {

	development: {
		client: 'mysql',
		connection: {
			host : process.env.DB_HOST,
			user : process.env.DB_USER,
			password : process.env.DB_PASS,
			database : process.env.DB_NAME
		},
		migrations: {
			tableName: 'migrations'
		}
	},
	production: {
		client: 'mysql',
		connection: {
			host : process.env.DB_HOST,
			user : process.env.DB_USER,
			password : process.env.DB_PASS,
			database : process.env.DB_NAME
		},
		migrations: {
			tableName: 'migrations'
		}
	}

};