const config = {
    development: {
           port: 4000,
           ormtype: {
                type: 'postgres',
                host: '192.168.99.100',
                port: 5432,
                username: 'root',
                password: 'root',
                database: 'pitches',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true
           }
    },
    test: {
        port: 4000,
        ormtype: {
             type: 'postgres',
             host: '192.168.99.100',
             port: 5432,
             username: 'root',
             password: 'root',
             database: 'pitches',
             entities: [__dirname + '/../**/*.entity{.ts,.js}'],
             synchronize: true
        }
 }
}
   
   const envConfig = config[process.env.NODE_ENV || 'development']
   
   export default envConfig
