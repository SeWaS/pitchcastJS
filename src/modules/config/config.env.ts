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
             type: process.env.PITCH_DB_DRIVER || 'postgres',
             host: process.env.PITCH_DB_HOST || '192.168.99.100',
             port: process.env.PITCH_DB_PORT || 9999,
             username: process.env.PITCH_DB_USER || 'root',
             password: process.env.PITCH_DB_PASSWORD || 'root',
             database: process.env.PITCH_DB_NAME || 'pitches',
             entities: [__dirname + '/../**/*.entity{.ts,.js}'],
             synchronize: process.env.PITCH_DB_SYNC || true
        }
    }
}

const envConfig = config[process.env.NODE_ENV || 'development']
export default envConfig
