import { Module } from '@nestjs/common'
import { PitchController } from './pitch.controller'
import { PitchProvider } from './pitch.provider'
import { Transformer } from '../transformer/transformation.provider'

@Module({
    controllers: [PitchController],
    providers: [PitchProvider]
})
export class PitchModule { }
