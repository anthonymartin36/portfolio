import knex from 'knex'
import config from './knexfile.js'
<<<<<<< HEAD

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])
=======
 
type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex.default(config[env])
>>>>>>> ddf4ccb (feat: migrated boilerplate-fullstack-query)

export default connection
