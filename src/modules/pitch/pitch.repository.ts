import { Connection } from 'typeorm'
import { Pitch } from './pitch.entity';

export const pitchDBProvider = [
    {
      provide: 'PitchRepository',
      useFactory: (connection: Connection) => connection.getRepository(Pitch),
      inject: ['PitchDatabase'],
    },
  ];