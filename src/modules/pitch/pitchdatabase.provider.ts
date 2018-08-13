import { createConnection } from 'typeorm'
import envConfig from '../config/config.env'

const {ormtype: ormConfig} = envConfig

export const pitchDatabaseProvider = [
    {
      provide: 'PitchDatabase',
      useFactory: async () => await createConnection(ormConfig)
    }
  ]
