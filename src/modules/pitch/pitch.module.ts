import { Module } from '@nestjs/common'
import { PitchController } from './pitch.controller'
import { PitchProvider } from './pitch.provider'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Pitch } from './pitch.entity'
import { pitchDBProvider } from './pitch.repository';
import { pitchDatabaseProvider } from './pitchdatabase.provider';

@Module({
    controllers: [PitchController],
    providers: [
        ...pitchDatabaseProvider,
        ...pitchDBProvider,
        PitchProvider
    ]
})
export class PitchModule { }
